import axios from "axios"
import { useState, useEffect } from "react";
import Informative from "./Informative";
import Surprising from "./Surprising";
import Thanks from "./Thanks";
function CommunityInteractions({ loginUsername, postIdentification }) {
    const [commInteractions, setcommInteractions] = useState({
        informative: 0,
        surprising: 0,
        thanks: 0
    });

    const [idOfSpecificCOmmInterac, setidOfSpecificCOmmInterac] = useState("")

    const [info, setInfo] = useState({
        username: loginUsername,
        user_post_id: postIdentification
    })

    const [alldata, setAllData] = useState([])

    const [informativeCount, setinformativeCount] = useState(0);
    const [surprisingCount, setsurprisingCount] = useState(0);
    const [thanksCount, setthanksCount] = useState(0)

    useEffect(() => {

        axios
            .get(`${import.meta.env.VITE_BACKEND_API}/communityinteractions`)
            .then((response) => {
                setAllData(response.data.data)
            })

            .catch((e) => console.error("catch", e));

    }, []);

useState(()=>{

    const communityInteractionsPostData = alldata.find(commInteracPost => commInteracPost.user_post_id === postIdentification && commInteracPost.username === loginUsername)
           
       
        if (communityInteractionsPostData) {
            setidOfSpecificCOmmInterac(communityInteractionsPostData.id)
            setcommInteractions(communityInteractionsPostData);

            console.log(commInteractions)
        }
 
},[])

    const patchCIInformative = (newPatch) => {

        const patchInformation = { ...newPatch, info }
        axios
            .put(`${import.meta.env.VITE_BACKEND_API}/communityinteractions/${idOfSpecificCOmmInterac}`, patchInformation)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => console.error("catch", e));
    }





    const patchCISurprising = (newPatch) => {

        const patchInformation = { ...newPatch, info }
        axios
            .put(`${import.meta.env.VITE_BACKEND_API}/communityinteractions/${idOfSpecificCOmmInterac}`, patchInformation)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => console.error("catch", e));
    }



    const patchCIThanks = (newPatch) => {

        const patchInformation = { ...newPatch, info }
        axios
            .put(`${import.meta.env.VITE_BACKEND_API}/communityinteractions/${idOfSpecificCOmmInterac}`, patchInformation)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => console.error("catch", e));
    }


    function clickInformative() {
        commInteractions.informative === 1 ? setcommInteractions({ ...commInteractions, informative: 0 }) : setcommInteractions({ ...commInteractions, informative: 1 })


        patchCIInformative(commInteractions)
        console.log(commInteractions)
    }
    function clickSurprising() {
        commInteractions.surprising === 1 ? setcommInteractions({ ...commInteractions, surprising: 0 }) : setcommInteractions({ ...commInteractions, surprising: 1 })

        patchCISurprising(commInteractions)
    }
    function clickThanks() {
        commInteractions.thanks === 1 ? setcommInteractions({ ...commInteractions, thanks: 0 }) : setcommInteractions({ ...commInteractions, thanks: 1 })

        patchCIThanks(commInteractions)
    }
    console.log(commInteractions)
    console.log(idOfSpecificCOmmInterac)
console.log(alldata)
    
    return (

        <div>


            <button onClick={clickInformative}>Informative</button>
            <Informative commInteractions={commInteractions} />
            <br></br>


            <button onClick={clickSurprising}>Surprising</button>
            <Surprising commInteractions={commInteractions} />
            <br></br>
            <button onClick={clickThanks}>Thanks</button>
            <Thanks commInteractions={commInteractions} />

        </div>

    )


}

export default CommunityInteractions