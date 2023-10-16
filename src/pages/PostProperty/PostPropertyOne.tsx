import React, { useState } from 'react'
import {data} from "./helper/PostPropertyData"
import SectionHoc from '../../components/Property/SectionHoc'
import Chip from '../../components/Chip/Chip'

const PostPropertyOne: React.FC = () => {
    const [iwant, setIwant] = useState(data)
    const [ptype, setPtype] = useState([])
    console.log(ptype)
  return (
    <div>
        <SectionHoc title='I Want to' >
            <div style={{display: "flex", flexWrap: "wrap"}} >
                {
                    iwant.map((item: any, i) => {
                        return (<Chip 
                        item={item}
                        key={i}
                        onClick={
                            () => {
                                setPtype(item?.child)
                            }
                        }
                        />)
                    })
                }
            </div>

        </SectionHoc>
    </div>
  )
}

export default PostPropertyOne