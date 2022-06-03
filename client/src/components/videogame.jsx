export default function Videogame(data){
   // console.log(data.data.image)
    return <div key={data.data.id}>
       
        <img src={data.data.image_background} alt="image not found"/>
        <h1>{data.data.name}</h1>
        
        </div>
}