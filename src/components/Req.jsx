import {useState} from "react";


function Req() {
    const [count, setCount] = useState(0); // Example: Track button clicks
    const [data, setData] = useState(null);
    const [info, setInfo] = useState(null);

    const handleClick = () => {
        setCount(count + 1);
        fetch('http://localhost:8080/home/info')
            .then(res => res.json())
            .then(data => setData(data))
        console.log('Button clicked!'); // Example action
        setInfo(data.homeName)

    };
    // useEffect(() => {
    //     fetch('http://localhost:8080/home/info')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //     setCount(count + 1);
    // }, [])
    if (data !== null) {
        console.log(count)

        console.log(info)



    }


    return (
        <div className="header_container">
            <h1>Hello</h1>
            <button onClick={handleClick}>Click Me!</button>
            <p>Got from server: {info} </p>
        </div>
    )

}

export default Req;