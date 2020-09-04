export const NetworkErrorCode = Object.freeze({
    CouldNotVerifyToken: 'Could not verify token',
    CouldNotVerifyLogin: 'Could not verify login',
})

export const WSCode = Object.freeze({
    GenericError: 'Generic error',
    NoSuchToken: 'No such token',
    GameComplete: 'Game complete',
})

export const GameSetupCode = Object.freeze({
    Heartbeat: '--heartbeat--',
    ConnectionDropped: '--connection dropped--',
    HandshakeComplete: 'handshake complete',
})
