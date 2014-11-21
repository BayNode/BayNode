/* jshint ignore:start */

// http
declare module http {
  declare function createServer(
    callback?: (req: httpIncomingMessage, res: httpServerResponse) => void
  ): httpServer
}

declare class httpServer {
  listen(
    port?: number, callback?: (err?: Error, value?: any) => void
  ): httpServer
}

declare class httpIncomingMessage {
  url: string
}

declare class httpServerResponse {
  end(chunk?: string): void
}


// Module: fs
declare module fs {
  declare function createReadStream(path: string): ReadStream
}

declare class ReadStream {
  pipe(writeStream: WriteStream): ReadStream
}

declare class WriteStream {
  pipe(readStream: ReadStream): WriteStream
}

/* jshint ignore:end */
