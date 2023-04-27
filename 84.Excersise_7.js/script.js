class Password {
    generateStrongPassword() {
        var length = 8,
            charset =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(parseInt(Math.random() * n));
        }

        this.password = retVal;
    }
    generateSuperStrongPassword() {
        this.password = window.crypto
            .getRandomValues(new BigUint64Array(1))[0]
            .toString(36);
    }
    generateFunnyPassword() {
        let funnyarr = ['password', 
            'ineedapassword',
            'changeme',
            'secret',
            'iamforgetful',
            'newpassword',
            'IamACompleteIdiot',
            'nothing',
            'nothingagain',
            'iforgot',
            'whydoialwaysforget',
            'qwerty',
            'asdf',
            'aslpls',
            'user',
            'YouWontGuessThisOne',
            'PasswordShmashword',
            'youmoron',
            'doubleclick',
            'iamnottellingyoumypw',
            'masterpassword',
            'yetanotherpassword',]
        this.password = funnyarr[parseInt(Math.random() * funnyarr.length)]
  }
}
let password = new Password()

