export default class Phone {
    constructor(jiage, chicun, renhe) {
        this.jiage = jiage;
        this.chicun = chicun;
        this.renhe = renhe;
    }

    set setJiage(jiage) {
        if (typeof jiage === "string") {
            window.alert('请输入数字')
        } else {
            this.jiage = jiage;
        }
    }

    get getJiage() {
        return this.jiage + 100;
    }

    call() {
        return `我一台手机价格是：${this.jiage}，我的尺寸是${this.chicun}`;
    }

}
