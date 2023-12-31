import { readFile } from 'node:fs'
import type { Buffer } from 'node:buffer'
import type { MessageBoxOptions, MessageBoxReturnValue, OpenDialogOptions, OpenDialogReturnValue, SaveDialogOptions, SaveDialogReturnValue } from 'electron'
import { ipcRenderer } from 'electron'
import jsmediatags from 'jsmediatags'

import type { FileTypeResult } from 'file-type'
import { fileTypeFromBuffer } from 'file-type'

export const api = {
  shopOpenDialog: async (options?: OpenDialogOptions): Promise<OpenDialogReturnValue> => {
    return await ipcRenderer.invoke('show-open-dialog', options)
  },
  shopSaveDialog: async (options?: SaveDialogOptions): Promise<SaveDialogReturnValue> => {
    return await ipcRenderer.invoke('show-save-dialog', options)
  },
  shopMessageDialog: async (options?: MessageBoxOptions): Promise<MessageBoxReturnValue> => {
    return await ipcRenderer.invoke('show-message-dialog', options)
  },
  openNewWindow: async (path?: string) => {
    return await ipcRenderer.invoke('open-new-window', path)
  },
  getMediaTags: (path: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      jsmediatags.read(path, {
        onSuccess: (tag: {}) => {
          resolve(tag)
        },
        onError: (error: { type: string }) => {
          reject(error)
        },
      })
    })
  },
  readFile: (path: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      readFile(path, (err, data) => {
        if (err)
          reject(err)

        else
          resolve(data)
      })
    })
  },
  getFileType: async (buffer: Buffer): Promise<FileTypeResult | undefined> => {
    return fileTypeFromBuffer(buffer)
  },
}
