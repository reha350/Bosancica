import SimpleImageSlider from "react-simple-image-slider";

class slodeshow extends React.Component {
    render() {
        const images = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
            </div>
        );
    }
}

export default slideshow;

