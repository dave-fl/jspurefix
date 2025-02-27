export interface ITlsOptions {
  readonly key: string,
  readonly cert: string,
  readonly ca?: string[],
  readonly timeout?: number,
  readonly sessionTimeout?: number,
  readonly enableTrace?: boolean,
  readonly requestCert?: boolean,
  readonly rejectUnauthorized?: boolean
}
