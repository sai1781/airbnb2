import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Stack } from "@mui/system";
import {   ImageList, ImageListItem, ImageListItemBar, IconButton, Typography, Link } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';




const TopSeller = _ => {
    const itemData = [

        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg',
            title: 'Collection',
            city: 'Mexico',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,
        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-poster/original/603101f0-242d-426b-89a9-0f19e206e31d.jpeg',
            title: 'Collection',
            city: 'India',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,
        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1767970-poster/original/64a33796-1a1e-4dd3-bdaf-10eaad6b7917.jpeg',
            title: 'Collection',
            city: 'USA',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,



        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1677605-poster/original/9f6a8fdf-fc45-4731-b6ec-d21ddeec2324.jpeg',
            title: 'Collection',
            city: 'France',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,


        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
            title: 'Collection',
            city: 'Italy',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,



        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
            title: 'Collection',
            city: 'Japan',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,



        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
            title: 'Collection',
            city: 'China',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,



        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
            title: 'Collection',
            city: 'Germany',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,



        },
        {
            img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2460171-media_library/original/342de641-c5ce-46f9-af16-fd34d1ecc2bd.jpeg',
            title: 'Collection',
            city: 'Australia',
            rating: '5.0',
            views: "3,310",
            about: "The Secret of haunted Hotel immersive Escape Room",
            amount: 3066,
        },
    ];




    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };



    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
   

    return (
        <>

            <Container  className="topSeller" maxWidth="false" style={{ marginTop: 50, marginLeft: 65, width: "auto", marginRight: 100 }}>
                <Stack className="app2">
                    <Stack justifyContent="space-between" direction="row"  >
                        <Typography fontSize={30} fontWeight="600" >Top sellers</Typography>

                        <Stack direction="row" flexWrap="noWrap" justifyContent="center" alignItems="center" >
                            <Link style={{ fontSize: 20, marginRight: 15, color: "black", }}>Show({Object.keys(itemData).length})</Link>
                            {scrollX !== 0 && (
                                <button
                                    className="prev2 hover"
                                    onClick={() => slide(-550)}
                                    
                                >
                                    <FontAwesomeIcon style={{ fontSize: 15, padding: 6, }} icon={faAngleLeft} />

                                </button>
                            )}
                            {!scrolEnd && (
                                <button
                                    className="next2 hover"
                                    onClick={() => slide(+550)}

                                >
                                    <FontAwesomeIcon style={{ fontSize: 15, padding: 6 }} icon={faAngleRight} />
                                </button>

                            )}
                        </Stack>
                    </Stack>

                </Stack>
            </Container>
            <Container  className="topSeller" maxWidth="false" style={{ marginLeft: 65, width: "auto", marginRight: 100, marginBottom: 50, height: 550 }}>
                <ImageList ref={scrl} onScroll={scrollCheck} style={{ overflow: "hidden", }} cols={216} rowHeight="auto">
                    {itemData.map((item, i) => (
                        <ImageListItem key={i} style={{ borderRadius: 15, width: 300, backgroundColor: "white", height: 530 }}>
                            <IconButton> <img
                                style={{ borderRadius: 10, height: 350, width: 450, justifyContent: "space-between" }}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            /></IconButton>
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'white' }}
                                    >
                                        <FavoriteBorderIcon style={{ marginRight: 20, marginTop: 15, fontSize: 30 }} />
                                    </IconButton>
                                }
                                actionPosition="right"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', color: "black"
                                }}
                                position="below"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'black', justifyContent: "flex-start" }}
                                        disableRipple="false" disableFocusRipple="false" size="small"
                                    >

                                        <StarIcon />
                                        <Typography style={{ display: "block" }} color="black">{item.rating}  ({item.views})  {item.city}</Typography>

                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', color: "black"
                                }}
                                position="below"
                                actionIcon={
                                    <IconButton size="small" disableRipple="false" disableFocusRipple="false"  style={{ justifyContent: "flex-start", alignItems: "flex-start", width:"80%" }}>
                                        <Stack  direction="row"  style={{ justifyContent: "flex-start", alignItems: "baseline" }} >
                                            <Typography  style={{ fontSize: 14, justifyContent: "flex-start", alignItems:"baseline" }} color="black">{item.about}</Typography>
                                        </Stack>
                                    </IconButton>

                                }
                                actionPosition="left"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', color: "black"
                                }}
                                position="below"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'black' }}
                                          size="small" disabled="false"
                                    >

                                        <Typography style={{ fontWeight: 550, fontSize: 17 }} color="black">From &#8377;{item.amount} /person</Typography>

                                    </IconButton>
                                }
                                actionPosition="left"
                            />

                        </ImageListItem>

                    ))}
                </ImageList>

            </Container>
        </>


    )
}

export default TopSeller;