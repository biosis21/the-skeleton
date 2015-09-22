import HomeCtrl from "./controllers/home-controller";

export default function (app) {

    app.get('/', HomeCtrl.get);
}