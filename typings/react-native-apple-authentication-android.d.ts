declare module "react-native-apple-authentication-android" {
  export const NOT_CONFIGURED_ERROR: string;
  export const SIGNIN_FAILED_ERROR: string;
  export const SIGNIN_CANCELLED_ERROR: string;

  enum ResponseTypeEnum {
    ALL = "ALL",
    CODE = "CODE",
    ID_TOKEN = "ID_TOKEN",
  }

  interface IResponseType {
    ALL: ResponseTypeEnum.ALL;
    CODE: ResponseTypeEnum.CODE;
    ID_TOKEN: ResponseTypeEnum.ID_TOKEN;
  }

  export const ResponseType: IResponseType;

  enum ScopeEnum {
    ALL = "ALL",
    EMAIL = "EMAIL",
    NAME = "NAME",
  }

  interface IScope {
    ALL: ScopeEnum.ALL;
    EMAIL: ScopeEnum.EMAIL;
    NAME: ScopeEnum.NAME;
  }

  export const Scope: IScope;

  interface IRNAppleAuthAndroidConfig {
    clientId: string;
    redirectUri: string;
    responseType?: ResponseTypeEnum;
    scope?: ScopeEnum;
    state?: string;
    nonce?: string;
  }

  interface ISigninResponseUser {
    name?: { firstName?: string; lastName?: string };
    email?: string;
  }

  interface ISigninResponse {
    user?: ISigninResponseUser;
    state?: string;
    id_token?: string;
    code?: string;
  }

  interface IRNAppleAuthAndroid {
    configure(configObject: IRNAppleAuthAndroidConfig): void;
    signIn(): Promise<ISigninResponse>;
  }
  const RNAppleAuthAndroid: IRNAppleAuthAndroid;
  export default RNAppleAuthAndroid;
}
