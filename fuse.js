
const {
    FuseBox,
    VueComponentPlugin,
    QuantumPlugin,
    StylusPlugin,
    CSSPlugin,
    CSSResourcePlugin,
    WebIndexPlugin,
    ConsolidatePlugin,
    Sparky
} = require("fuse-box");

let fuseClient;
let fuseServer;
let isProduction = false;

Sparky.task("set-prod", () => {
    isProduction = true;
});
Sparky.task("clean", () => Sparky.src("./dist").clean("dist/"));
Sparky.task("watch-assets", () => Sparky.watch("./assets/**/**.*", { base: "./src/client" }).dest("./dist/public"));
Sparky.task("copy-assets", () => Sparky.src("./assets/**/**.*", { base: "./src/client" }).dest("./dist/public"));
Sparky.task("copy-config", () => Sparky.src("config/**/**.*").dest("./dist"));
Sparky.task("copy:fonts", () =>  Sparky.src("./node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2")
    .dest("dist/public/fonts/$name"))

Sparky.task("config", () => {
    fuseClient = FuseBox.init({
        homeDir: "./src/client",
        output: "dist/public/$name.js",
        hash: isProduction,
        sourceMaps: !isProduction,
        target: 'browser',
        useTypescriptCompiler: true,
        allowSyntheticDefaultImports: true,
        experimentalFeatures: true,
        plugins: [
            VueComponentPlugin({
                style: [
                    StylusPlugin({
                        compress: true
                    }),
                    CSSPlugin()
                ],
                template: [ConsolidatePlugin({ useDefault : false, engine: 'pug' })]
            }),
            WebIndexPlugin({
                template: "./src/client/index.html",
                title: 'WGly'
            }),
            CSSPlugin(),
            isProduction && QuantumPlugin({
                bakeApiIntoBundle: "vendor",
                uglify: true,
                treeshake: true,
                css: {
                    clean: true
                }
            })
        ]
    });

    fuseServer = FuseBox.init({
        homeDir: "./src/server",
        output: "dist/$name.js",
        experimentalFeatures: true,
        hash: isProduction,
        sourceMaps: !isProduction,
        target: 'server',
        useTypescriptCompiler: true,
        allowSyntheticDefaultImports: true,
        plugins: [
            isProduction && QuantumPlugin({
                bakeApiIntoBundle: true,
                uglify: true,
                treeshake: true
            })
        ]
    });

    if(!isProduction){
        fuseClient.dev({
            open: false,
            port: 8080
        });
    }

    const server = fuseServer.bundle("server")
        .instructions(" > [index.ts]")
        // Execute process right after bundling is completed
        // launch and restart express

    const vendor = fuseClient.bundle("vendor")
        .instructions("~ index.ts")
        .hmr({reload: true});
    
    const app = fuseClient.bundle("app")
        .instructions("!> [index.ts]")

    if(!isProduction){
        server.watch().completed(proc => proc.start())

        app.watch().hmr({reload: true})
    }
})

Sparky.task("default", ["clean", "watch-assets", "config", "copy:fonts"], () => {
    return fuseClient.run() && fuseServer.run();
    //return fuseServer.run();
});

Sparky.task("dist", [ "clean", "copy-assets", "set-prod", "config", "copy-config"], () => {
   // return fuseClient.run() && fuseServer.run();
    //return fuseServer.run();
});