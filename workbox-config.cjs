module.exports = {
    globDirectory: 'public/',
    globPatterns: ["**/*", '{js,css,html,png,svg}'],
    swSrc: "public/service_worker.js",
    swDest: "public/service_worker.js",
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
}