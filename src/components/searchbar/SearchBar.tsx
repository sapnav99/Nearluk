import React from 'react'
import { BsFillGeoAltFill } from "react-icons/bs";
import {AiFillHome} from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'



type Props = {}

export default function SearchBar({}: Props) {
  return (
    <section className='searchbar__section' style={{display: "flex", alignItems: 'center', justifyContent: "center",}}>
        <div className='p-2' style={{backgroundColor: "#84D7E8", borderRadius: "20px"}}>
            <div>
                <div className="p-2">
                    <div className="container-fluid">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className='d-flex justify-content-around'>
                                        <div className="link-item">
                                            <a className='active'><h6>Buy</h6></a>
                                        </div>
                                        <div className="link-item">
                                            <a><h6>Rent</h6></a>
                                        </div>
                                        <div className="link-item">
                                            <a><h6>PG</h6></a>
                                        </div>
                                        <div className="link-item">
                                            <a><h6>Plot</h6></a>
                                        </div>
                                        <div className="link-item">
                                            <a><h6>Commercial</h6></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>	
            </div>
            {/* <div className="searches p-1">
                    <form method="post">
                    <input type="text" placeholder="Search..." /> 
                    <button type="submit">
                        <i className="icofont-search"></i>
                    </button>  
                    </form>
            </div> */}
            <div className='nl-search__wrap'>
                <div className='nl-search__location'>
                    <span><BsFillGeoAltFill style={{ color: "green", fontSize: "1.5em"}}/></span>
                    <div className='nl-search__location_wrap'>
                        <input type='text' className='nl-searchlocation__input' placeholder='Enter City, Location, project'  />
                    </div>
                    <div className='nl-search__error'></div>
                </div>
                <div className='nl-search__property'>
                    <span><AiFillHome /></span>
                    <div className='nl-search__title'>
                        <span>Property</span>
                        <span> +1</span>
                        <span style={{fontSize: "20px"}} ><MdArrowDropDown /></span>
                    </div>
                    
                    <div className='nl-search__relative'>
                        <div className='nl-search__dropdown'>
                        </div>
                    </div>
                </div>
                <div className='nl-search__budget'>
                    <span><AiFillHome/></span>
                    <div className="nl-search__title">
                        <span>Budget</span>
                        
                    </div>
                    <div className='nl-search__relative'>
                        <div className='nl-search__dropdown'>
                        </div>
                    </div>
                </div>
                <div className='nl-search__button'>
                    <div className='nl-search_btn_wrap'>
                        <span className='nl-search__btn_icon'><i className="icofont-search"></i></span>
                        <span className='nl-search__btn_text'>Search</span>
                    </div>
                </div>
            </div>
        </div>	
</section>
  )
}