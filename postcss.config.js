if(process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: {
            autoprefixer: {},
            cssnano: {},
            'rucksack-css': {},
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    module.exports = {
        plugins: {
            autoprefixer: {},
            'rucksack-css': {},
        }
    }
}