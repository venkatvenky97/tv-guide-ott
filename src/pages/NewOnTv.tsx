import Header from './Header';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Button } from 'reactstrap';

// const NEWONTV = gql`
// query NewOnTV($input: NewOnTVInput!) {
//     newOnTV(input: $input) {
//       count
//       schedules {
//         id
//         title
//         startAt
//         channel {
//           logoURL
//         }
//         asset {
//           imageURL
//           number
//           series {
//             imageURL
//           }
//           season {
//             imageURL
//             number
//           }
//         }
//       }
//     }
//   }
// `




export default function NewOnTv() {
    var [newTV, setNewtv] = useState([]);
    const [tvd, setTvd] = useState()

    var data = JSON.stringify({
        query: `query NewOnTV($input: NewOnTVInput!) {
        newOnTV(input: $input) {
          count
          schedules {
            id
            title
            startAt
            channel {
              logoURL
            }
            asset {
              imageURL
              number
              series {
                imageURL
              }
              season {
                imageURL
                number
              }
            }
          }
        }
      }`,
        variables: { "input": { "pagination": { "skip": 0, "take": 50 } } }
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://tvgui-tvgui-1tv3elndl7z1r-533858730.eu-west-2.elb.amazonaws.com/graphql',
        headers: {
            'Authorization': '2ccb96dd-a4da-402f-b8d0-dc23f87e6655',
            'Content-Type': 'application/json'
        },
        data: data
    };



    useEffect(() => {
        axios(config)
            .then(function (response: { data: any; }) {
                setNewtv(response.data.data.newOnTV.schedules);
                console.log('dataa',response.data.data.newOnTV.schedules)
            })
            .catch(function (error: any) {
                console.log(error);
            });

    }, []);

    // const { loading, error, data } = useQuery(NEWONTV, {
    //     context: {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "2ccb96dd-a4da-402f-b8d0-dc23f87e6655"
    //         }
    //     }
    // })
    // console.log('data',data)
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error...</p>


    return (
        <>
           
            {/* <div className="page new-on-tv-page">
                <Header />
                <div className="w-100 text-white d-none d-xl-flex flex-column justify-content-end" id="listing-search">
                    <div className="form-wrapper">
                        <h1>New on TV</h1>
                    </div>
                </div>
                <Footer />
            </div> */}
            {newTV?.forEach((element: any) => {
            
            <section id="listing-section">
            <div className="d-flex flex-column flex-lg-row">
                <div className="flex-fill content">
                    <div className="row">
                        <div className="col-lg grid-item">
                                333333
                                    <div className="c-card text-white d-flex flex-column justify-content-between channel bbc-two">
                                        <div className="col p-0 d-flex justify-content-between align-items-start">
                                            <div className="logo">
                                                <div className="d-flex align-items-center">
                                                    <img src="assets/images/channels/bbc-two.png" alt="BBC Two" />
                                                    <span className="ml-2 date">6.00pm<br />Today</span>
                                                </div>
                                            </div>
                                        </div>
          

                                        <div className="desc col d-flex justify-content-end flex-column">
                                            <h6 className="title font-weight-bold">
                                          
                                                {element.t}
                                            </h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="sub-title">S1 E8</div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
        )}
           
        </>
    )
}
