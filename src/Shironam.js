function Shironam({url,discription,pera}){
    return(
        <div className="w-4/12">
<img src={url} className="h-2/6 w-full p-4  "/>
<h1 className="text-2xl  underline underline-offset-1 m-2 bg-green-400 hover:bg-pink-300">{discription}</h1>
<p className="p-2 bg-yellow-400 hover:bg-red-300  ">{pera}</p>
        </div>
    );
}

export default Shironam;