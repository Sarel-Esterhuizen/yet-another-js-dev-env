import path from 'path';

// Configure webpack by just exporting an object.
export default {
  debug: true, // For debugging information when we run our build.
  devtool: 'inline-source-map', // Compilation speed vs Quality (Different Tools & Higher Quality = Longer Generation)
  noInfo: false, // WebPack will display list of files it is bundling.
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // Could set it to Node which would change how bundle works. Could also be electron.
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  }, // Webpack does not actually create file, just keeps it in memory.
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] } // Add for sass, less etc...
    ]
  }
}
