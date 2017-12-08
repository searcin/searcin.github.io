export let AuthConfig = {
    'USER': {
        name: 'user',
        set: function (obj) {
            sessionStorage[this.name] = JSON.stringify(obj);
        },
        get: function () {
            let user = sessionStorage[this.name];
            if (user)
                return JSON.parse(user);
            else
                return null;
        },
        clear: function () {
            sessionStorage.removeItem(this.name);
        }
    }
};