import keepfolder from "imagemin-keep-folder";
import gifsicle from "imagemin-gifsicle";
import svgo from "imagemin-svgo";
import webp from "imagemin-webp";

keepfolder(["src/img/**/*.{jpg,png,gif,svg,webp}"], {
  plugins: [
    gifsicle(),
    svgo(),
    webp({
      quality: 50,
    }),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, "../dist/img/");
  },
});
