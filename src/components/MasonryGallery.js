import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import '../assets/css/imgGalleryMassonry.css'
// The number of columns change by resizing the window

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpCw18DOrydVPCDiAGvjMvD5ggWVgrdoLxA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNb84muNFISNicfMX19rFz3IH2izTkfjf1g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSWhh5xOPUVKeklPJKIIldq9eIFdVJRalYQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvnSkjZh1BHdpIN_MM3-ymNz_8LbXOtePhA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagJu4vXCtFH3rNmzBdh8RwslFLHmJ5WbDJg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-0S366QlhzqYNqRWh3GbWCvmSxiyjdPInQ&usqp=CAU",
   
  ]

class MyWrapper extends React.Component {
    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
            
                      {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="imgGalleryMassonry"
                style={{width: "100%", display: "block" }}
              />
            ))}
                
                </Masonry>
                
            </ResponsiveMasonry>
        )
    }
}
export default MyWrapper