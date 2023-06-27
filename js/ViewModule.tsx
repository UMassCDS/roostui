export interface ImageTrackProps {
  elementSize: number; // size of displayed image
  basepath: string; // parent directory for all images in this series
  imageSeries: string[]; // filenames of all images
  imageLength: number; // number of pixels in source image
  allTracks: string[][]; // information for each track
}

function ViewModule() {
  return (<div> This is the new module </div>);
};
const container = document.getElementById('view_module');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ViewModule />);