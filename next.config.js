module.exports = {
    reactStrictMode: true
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
    images: {
        disableStaticImages: true
    }
}
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}
