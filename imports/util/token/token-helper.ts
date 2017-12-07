import { Meteor } from 'meteor/meteor';

export class TokenHelper {
  /**
   * requestToken - 오브젝트를 정의된 비밀키로 Json Web Token화 시킵니다. 
   *                실제 코드는 서버에서 작동 하고, 클라이언트는 토큰화 된 문자열을 받습니다.
   * 
   * @param obj - 토큰화 할 객체입니다.
   */
  public requestToken(obj: any): string {
    let token;

    Meteor.call('token.request', obj, // ~
    (err, res: string) => {
      if (err) {
        console.error(err);
        return;
      }

      token = res;
    });

    return token;
  }

  /**
   * validateToken -  토큰화 된 문자열을 해석해 반환합니다. 
   *                  서버에서만 작동합니다.
   * 
   * @param token - requestToken으로 토큰화 된 문자열입니다.
   */
  public validateToken(token: string) {
    if (!Meteor.isServer) {
      console.error({
        type: "NOT_RUNNING_ON_SERVER",
        message: "토큰 인증은 서버에서만 할 수 있습니다."
      });

      return;
    }

    let validToken;

    Meteor.call('token.validate', token, (err, res) => {
      if (err) {
        if (err.type == 'Token.Error') {
          console.error(err.message);
        }

        console.error(err);

        return;
      }

      validToken = res;
    });

    return validToken;
  }
}