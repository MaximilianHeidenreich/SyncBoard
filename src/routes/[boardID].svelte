<script context="module">
/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ page }) {
    return { props: { boardID: page.params.boardID }}
}
</script>
<script lang="ts">
import { onMount, onDestroy } from 'svelte'
import { get } from 'svelte/store';
import { items } from './itemStore'

import Board from "$lib/Board.svelte"
import BoardItem from "$lib/BoardItem.svelte"
import ToastGroup from '$lib/Toast/ToastGroup.svelte';
import { addToast, toasts } from './toastStore';
import { goto } from '$app/navigation';
import { myPeerId } from './peerStore';

// PROPS
export let boardID = "new";

// BINDINGS
let addItemInput = "";

// P2P
let peer: Peer;
let connections = [];

// UTIL
const rand = ()=>Math.random().toString(36).substr(2);
const token = (length)=>(rand()+rand()+rand()+rand()).substr(0,length);

onMount(async () => {
    boardURL = window.location.origin;
    peer = new Peer(token(10));

    peer.on('error', (err) => {
        addToast("error", err);
        console.error(err);
    })

    peer.on('open', function(id) {
        console.log('Your peer ID is: ' + id);
        
        myPeerId.update(n => id)

        if (boardID === "new") {
            boardURL += `/${id}`
            history.replaceState(null, `SyncBoard - ${id}`, `/${id}`);
        }
        else {
            console.log(`Connecting to: ${boardID}`);
            let conn = peer.connect(boardID);
            conn.on('open', () => {
                handleConnection(conn)
                boardURL += `/${boardID}`
                history.replaceState(null, `SyncBoard - ${boardID}`, `/${boardID}`);
                conn.send(JSON.stringify({ type: "reqItemsUpdate" }))
            });
        }


    });
    peer.on('connection', c => {
        handleConnection(c)
    });
    /*peer.on('open', () => {
        // Send initial data if ther is any.
        if (get(items).length > 0)
            sendItemsUpdate()
            //setTimeout(() => sendItemsUpdate(), 2000)
    })*/
    
});

onDestroy(() => {
    console.log("destroy");
    
    if (peer) {
        peer.destroy()
    }
});

function handleConnection(conn) {
    console.log("New connection!: " + conn);
    connections.push(conn);
    connected = true;
    conn.on('data', d => handleDataRecv(JSON.parse(d)))
    conn.on('close', () => {
        addToast("info", "Remote peer has closed the connection!")
    })
}

function handleDataRecv(data) {
    if (data.type === "itemsUpdate")
        items.update(n => data.items)
    else if (data.type === "reqItemsUpdate")
        sendItemsUpdate()
}

function sendItemsUpdate() {
    connections.forEach(conn => {
        conn.send(JSON.stringify({
            type: "itemsUpdate",
            items: get(items)
        }));
    })
}


//roomId === 0 ? peer.id : peer.id;
let boardURL = "oops, there was an error :(";
let connected = false;
let connectedCss = connected ? "text-green-500" : "text-red-500";
$: connectedCss = connected ? "text-green-500" : "text-red-500";

let completedItems = [];
$: completedItems = $items.filter(i => i.completed === true && i.completedBy === peer.id);

function addItem() {
    if (addItemInput === "")
        return;
    items.update(n => [...n, {
        name: addItemInput,
        completed: false,
        completedBy: ""
    }])
    addItemInput = "";
    sendItemsUpdate();
}
function completeItem(event) {
    let itemName = event.detail.name;
    items.update(n => {
        n.forEach(item => {
            if (item.name === itemName && !item.completed) 
                n[n.indexOf(item)] = {
                    name: item.name,
                    completed: true,
                    completedBy: peer.id
                }
        });
        return n;
    });
    sendItemsUpdate();
}

function copyBoardUrl() {
    copyTextToClipboard(boardURL);
    addToast("info", "Copied url to clipboard!");
}
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

</script>

<ToastGroup toasts={$toasts}/>

<section>
    <div class="w-full flex justify-between">
        <h2 on:click={() => goto("/")} class="mb-1 cursor-pointer">SyncBoard</h2>
        <button on:click={copyBoardUrl} class="secondary">Copy Board URL</button>
    </div>
    <small>Peer: </small><small class="{connectedCss}">{#if connected}Connected{:else}Not Connected{/if}</small>
    <br>
    <small>Board URL: <a href="">{boardURL}</a></small>
    <br>
    <small>Your score: {completedItems.length} / {$items.length}</small>
    <div class="mb-4"></div>
    <div>
        <form class="flex space-x-4" on:submit|preventDefault={addItem}>
            <input bind:value={addItemInput} placeholder="Item name" class="">
            <button on:click={addItem}>Add item</button>
        </form>
    </div>
    <div class="mb-8"></div>
    <Board on:itemCompletion={completeItem} bind:items={$items}></Board>
</section>

<section class="mt-24">
    <h4 class="mb-4">How it works?</h4>
    <p class="mb-4">
        Just share the "Board URL" with your friends and start adding items.
        All items will be synchronized with everyone in the session.
    </p>
    <div class="flex content-between items-stretch space-x-3">
        <BoardItem clazz="w-full p-3" name="Click to complete" completed={false}/>
        <BoardItem clazz="w-full p-3" name="Completed by you" completed={true} completedBy={$myPeerId}/>
        <BoardItem clazz="w-full p-3" name="Completed by others" completed={true} completedBy={null}/>
    </div>
</section>

<style lang="postcss">
</style>