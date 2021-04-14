import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export const toasts = writable([]);

export function addToast(type: string, message: string) {
    toasts.update(n => {
        let id = guid();
        n.push({
            id: id,
            type: type,
            message: message
        })
        setTimeout(() => removeToast(id), 4000);
        return n;
    })
}

export function removeToast(id: string) {
    toasts.update(n => {
        n.forEach(toast => {
            if (toast.id === id) {
                n.splice(n.indexOf(toast), 1);
            }
        })
        return n;
    })
}

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}