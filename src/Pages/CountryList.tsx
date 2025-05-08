import React, { useEffect, useState} from 'react';
import { Country, countryLinks } from '../types';
import './CountryList.css';
import airplaneIcon from "../assets/icons/airplane-svg.svg";
import cameraIcon from "../assets/icons/camera-svg.svg";
import hotelIcon from "../assets/icons/hotel-svg.svg";


// Create a map of country codes to flag images
const flagMap: { [key: string]: () => Promise<{ default: string }> } = {
    'AD': () => import('../assets/flags/ad.svg'),
    'AE': () => import('../assets/flags/ae.svg'),
    'AF': () => import('../assets/flags/af.svg'),
    'AG': () => import('../assets/flags/ag.svg'),
    'AI': () => import('../assets/flags/ai.svg'),
    'AL': () => import('../assets/flags/al.svg'),
    'AM': () => import('../assets/flags/am.svg'),
    'AO': () => import('../assets/flags/ao.svg'),
    'AR': () => import('../assets/flags/ar.svg'),
    'AS': () => import('../assets/flags/as.svg'),
    'AT': () => import('../assets/flags/at.svg'),
    'AU': () => import('../assets/flags/au.svg'),
    'AW': () => import('../assets/flags/aw.svg'),
    'AZ': () => import('../assets/flags/az.svg'),
    'BA': () => import('../assets/flags/ba.svg'),
    'BB': () => import('../assets/flags/bb.svg'),
    'BD': () => import('../assets/flags/bd.svg'),
    'BE': () => import('../assets/flags/be.svg'),
    'BF': () => import('../assets/flags/bf.svg'),
    'BG': () => import('../assets/flags/bg.svg'),
    'BH': () => import('../assets/flags/bh.svg'),
    'BI': () => import('../assets/flags/bi.svg'),
    'BJ': () => import('../assets/flags/bj.svg'),
    'BM': () => import('../assets/flags/bm.svg'),
    'BN': () => import('../assets/flags/bn.svg'),
    'BO': () => import('../assets/flags/bo.svg'),
    'BR': () => import('../assets/flags/br.svg'),
    'BS': () => import('../assets/flags/bs.svg'),
    'BT': () => import('../assets/flags/bt.svg'),
    'BW': () => import('../assets/flags/bw.svg'),
    'BY': () => import('../assets/flags/by.svg'),
    'BZ': () => import('../assets/flags/bz.svg'),
    'CA': () => import('../assets/flags/ca.svg'),
    'CD': () => import('../assets/flags/cd.svg'),
    'CF': () => import('../assets/flags/cf.svg'),
    'CG': () => import('../assets/flags/cg.svg'),
    'CH': () => import('../assets/flags/ch.svg'),
    'CI': () => import('../assets/flags/ci.svg'),
    'CL': () => import('../assets/flags/cl.svg'),
    'CM': () => import('../assets/flags/cm.svg'),
    'CN': () => import('../assets/flags/cn.svg'),
    'CO': () => import('../assets/flags/co.svg'),
    'CR': () => import('../assets/flags/cr.svg'),
    'CU': () => import('../assets/flags/cu.svg'),
    'CV': () => import('../assets/flags/cv.svg'),
    'CY': () => import('../assets/flags/cy.svg'),
    'CZ': () => import('../assets/flags/cz.svg'),
    'DE': () => import('../assets/flags/de.svg'),
    'DJ': () => import('../assets/flags/dj.svg'),
    'DK': () => import('../assets/flags/dk.svg'),
    'DM': () => import('../assets/flags/dm.svg'),
    'DO': () => import('../assets/flags/do.svg'),
    'DZ': () => import('../assets/flags/dz.svg'),
    //next 50
    'EC': () => import('../assets/flags/ec.svg'),
    'EE': () => import('../assets/flags/ee.svg'),
    'EG': () => import('../assets/flags/eg.svg'),
    'ER': () => import('../assets/flags/er.svg'),
    'ES': () => import('../assets/flags/es.svg'),
    'ET': () => import('../assets/flags/et.svg'),
    'FI': () => import('../assets/flags/fi.svg'),
    'FJ': () => import('../assets/flags/fj.svg'),
    'FM': () => import('../assets/flags/fm.svg'),
    'FR': () => import('../assets/flags/fr.svg'),
    'GA': () => import('../assets/flags/ga.svg'),
    'GB': () => import('../assets/flags/gb.svg'),
    'GD': () => import('../assets/flags/gd.svg'),
    'GE': () => import('../assets/flags/ge.svg'),
    'GH': () => import('../assets/flags/gh.svg'),
    'GM': () => import('../assets/flags/gm.svg'),
    'GN': () => import('../assets/flags/gn.svg'),
    'GQ': () => import('../assets/flags/gq.svg'),
    'GR': () => import('../assets/flags/gr.svg'),
    'GT': () => import('../assets/flags/gt.svg'),
    'GW': () => import('../assets/flags/gw.svg'),
    'GY': () => import('../assets/flags/gy.svg'),
    'HN': () => import('../assets/flags/hn.svg'),
    'HR': () => import('../assets/flags/hr.svg'),
    'HT': () => import('../assets/flags/ht.svg'),
    'HU': () => import('../assets/flags/hu.svg'),
    'ID': () => import('../assets/flags/id.svg'),
    'IE': () => import('../assets/flags/ie.svg'),
    'IL': () => import('../assets/flags/il.svg'),
    'IN': () => import('../assets/flags/in.svg'),
    'IQ': () => import('../assets/flags/iq.svg'),
    'IR': () => import('../assets/flags/ir.svg'),
    'IS': () => import('../assets/flags/is.svg'),
    'IT': () => import('../assets/flags/it.svg'),
    'JM': () => import('../assets/flags/jm.svg'),
    'JO': () => import('../assets/flags/jo.svg'),
    'JP': () => import('../assets/flags/jp.svg'),
    'KE': () => import('../assets/flags/ke.svg'),
    'KG': () => import('../assets/flags/kg.svg'),
    'KH': () => import('../assets/flags/kh.svg'),
    'KI': () => import('../assets/flags/ki.svg'),
    'KM': () => import('../assets/flags/km.svg'),
    'KN': () => import('../assets/flags/kn.svg'),
    'KP': () => import('../assets/flags/kp.svg'),
    'KR': () => import('../assets/flags/kr.svg'),
    'KW': () => import('../assets/flags/kw.svg'),
    'KZ': () => import('../assets/flags/kz.svg'),
    'LA': () => import('../assets/flags/la.svg'),
    //next 50
    'LB': () => import('../assets/flags/lb.svg'),
    'LC': () => import('../assets/flags/lc.svg'),
    'LI': () => import('../assets/flags/li.svg'),
    'LK': () => import('../assets/flags/lk.svg'),
    'LR': () => import('../assets/flags/lr.svg'),
    'LS': () => import('../assets/flags/ls.svg'),
    'LT': () => import('../assets/flags/lt.svg'),
    'LU': () => import('../assets/flags/lu.svg'),
    'LV': () => import('../assets/flags/lv.svg'),
    'LY': () => import('../assets/flags/ly.svg'),
    'MA': () => import('../assets/flags/ma.svg'),
    'MC': () => import('../assets/flags/mc.svg'),
    'MD': () => import('../assets/flags/md.svg'),
    'ME': () => import('../assets/flags/me.svg'),
    'MG': () => import('../assets/flags/mg.svg'),
    'MH': () => import('../assets/flags/mh.svg'),
    'MK': () => import('../assets/flags/mk.svg'),
    'ML': () => import('../assets/flags/ml.svg'),
    'MM': () => import('../assets/flags/mm.svg'),
    'MN': () => import('../assets/flags/mn.svg'),
    'MO': () => import('../assets/flags/mo.svg'),
    'MP': () => import('../assets/flags/mp.svg'),
    'MR': () => import('../assets/flags/mr.svg'),
    'MT': () => import('../assets/flags/mt.svg'),
    'MU': () => import('../assets/flags/mu.svg'),
    'MV': () => import('../assets/flags/mv.svg'),
    'MW': () => import('../assets/flags/mw.svg'),
    'MX': () => import('../assets/flags/mx.svg'),
    'MY': () => import('../assets/flags/my.svg'),
    'MZ': () => import('../assets/flags/mz.svg'),
    'NA': () => import('../assets/flags/na.svg'),
    'NE': () => import('../assets/flags/ne.svg'),
    'NG': () => import('../assets/flags/ng.svg'),
    'NI': () => import('../assets/flags/ni.svg'),
    'NL': () => import('../assets/flags/nl.svg'),
    'NO': () => import('../assets/flags/no.svg'),
    'NP': () => import('../assets/flags/np.svg'),
    'NR': () => import('../assets/flags/nr.svg'),
    'NU': () => import('../assets/flags/nu.svg'),
    'NZ': () => import('../assets/flags/nz.svg'),
    'OM': () => import('../assets/flags/om.svg'),
    'PA': () => import('../assets/flags/pa.svg'),
    'PE': () => import('../assets/flags/pe.svg'),
    'PF': () => import('../assets/flags/pf.svg'),
    'PG': () => import('../assets/flags/pg.svg'),
    'PH': () => import('../assets/flags/ph.svg'),
    'PK': () => import('../assets/flags/pk.svg'),
    'PL': () => import('../assets/flags/pl.svg'),
    'PS': () => import('../assets/flags/ps.svg'),
    'PT': () => import('../assets/flags/pt.svg'),
    'PW': () => import('../assets/flags/pw.svg'),
    'PY': () => import('../assets/flags/py.svg'),
    'QA': () => import('../assets/flags/qa.svg'),
    //next 50
    'RO': () => import('../assets/flags/ro.svg'),
    'RS': () => import('../assets/flags/rs.svg'),
    'RU': () => import('../assets/flags/ru.svg'),
    'RW': () => import('../assets/flags/rw.svg'),
    'SA': () => import('../assets/flags/sa.svg'),
    'SB': () => import('../assets/flags/sb.svg'),
    'SC': () => import('../assets/flags/sc.svg'),
    'SD': () => import('../assets/flags/sd.svg'),
    'SE': () => import('../assets/flags/se.svg'),
    'SG': () => import('../assets/flags/sg.svg'),
    'SH': () => import('../assets/flags/sh.svg'),
    'SI': () => import('../assets/flags/si.svg'),
    'SK': () => import('../assets/flags/sk.svg'),
    'SL': () => import('../assets/flags/sl.svg'),
    'SM': () => import('../assets/flags/sm.svg'),
    'SN': () => import('../assets/flags/sn.svg'),
    'SO': () => import('../assets/flags/so.svg'),
    'SR': () => import('../assets/flags/sr.svg'),
    'SS': () => import('../assets/flags/ss.svg'),
    'ST': () => import('../assets/flags/st.svg'),
    'SV': () => import('../assets/flags/sv.svg'),
    'SY': () => import('../assets/flags/sy.svg'),
    'SZ': () => import('../assets/flags/sz.svg'),
    'TC': () => import('../assets/flags/tc.svg'),
    'TD': () => import('../assets/flags/td.svg'),
    'TG': () => import('../assets/flags/tg.svg'),
    'TH': () => import('../assets/flags/th.svg'),
    'TJ': () => import('../assets/flags/tj.svg'),
    'TL': () => import('../assets/flags/tl.svg'),
    'TM': () => import('../assets/flags/tm.svg'),
    'TN': () => import('../assets/flags/tn.svg'),
    'TO': () => import('../assets/flags/to.svg'),
    'TR': () => import('../assets/flags/tr.svg'),
    'TT': () => import('../assets/flags/tt.svg'),
    'TV': () => import('../assets/flags/tv.svg'),
    'TW': () => import('../assets/flags/tw.svg'),
    'TZ': () => import('../assets/flags/tz.svg'),
    'UA': () => import('../assets/flags/ua.svg'),
    'UG': () => import('../assets/flags/ug.svg'),
    'US': () => import('../assets/flags/us.svg'),
    'UY': () => import('../assets/flags/uy.svg'),
    'UZ': () => import('../assets/flags/uz.svg'),
    'VA': () => import('../assets/flags/va.svg'),
    'VC': () => import('../assets/flags/vc.svg'),
    'VE': () => import('../assets/flags/ve.svg'),
    'VN': () => import('../assets/flags/vn.svg'),
    'VU': () => import('../assets/flags/vu.svg'),
    'WS': () => import('../assets/flags/ws.svg'),
    'YE': () => import('../assets/flags/ye.svg'),
    'ZA': () => import('../assets/flags/za.svg'),
    'ZM': () => import('../assets/flags/zm.svg'),
    'ZW': () => import('../assets/flags/zw.svg'),
    //last chunck
    };
  


const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
    const [flagUrls, setFlagUrls] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const loadFlags = async () => {
            const urls: { [key: string]: string } = {};
            for (const code of Object.keys(flagMap)) {
                const flag = await flagMap[code]();
                urls[code] = flag.default;
            }
            setFlagUrls(urls);
        };
        loadFlags();
    }, []);

    // ✅ Merge affiliate links into countries dynamically
    const affiliateCountries = countries.map(country => ({
        ...country,
        affiliateLinks: countryLinks[country.name] || { flights: [], hotels: [], attractions: [] }
    }));

    return (
        <div>
            {affiliateCountries.map((country, index) => (
                <div
                    className='indexBar'  
                    key={index} 
                    style={{ 
                        backgroundColor: index % 2 === 0 ? '#f5d7b2' : '#f7e3c6', 
                        padding: '10px', 
                        display: 'flex', 
                        alignItems: 'center'
                    }}>
         

                    {country.countryCode && flagMap[country.countryCode] ? (
                        <img 
                            src={flagUrls[country.countryCode]}
                            alt={`${country.name} flag`} 
                            style={{ width: '50px', marginRight: '10px' }}  
                        />
                    ) : (
                        <span>No flag available for</span> 
                    )} 

                    <span id='country-title'>{country.name}</span>


                    {/* Dynamically assign affiliate links */}
                    
                    {/* ✅ Dynamically assign affiliate links */}
                    <div className="affiliate-links">
                        {/* Flights */}
                        <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {country.affiliateLinks.flights ? (
                                <a href={country.affiliateLinks.flights} target="_blank" rel="nofollow noopener">
                                    <img src={airplaneIcon} alt="Flights Affiliate Link" width="50" height="50" />
                                </a>
                            ) : (
                                <div style={{ width: "50px", height: "50px", visibility: "hidden" }}></div> /* ✅ Empty placeholder */
                            )}
                        </div>

                        {/* Hotels */}
                        <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {country.affiliateLinks.hotels ? (
                                <a href={country.affiliateLinks.hotels} target="_blank" rel="nofollow noopener">
                                    <img src={hotelIcon} alt="Hotels Affiliate Link" width="40" height="40" />
                                </a>
                            ) : (
                                <div style={{ width: "50px", height: "50px", visibility: "hidden" }}></div> /* ✅ Empty placeholder */
                            )}
                        </div>

                        {/* Attractions */}
                        <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {country.affiliateLinks.attractions ? (
                                <a href={country.affiliateLinks.attractions} target="_blank" rel="nofollow noopener">
                                    <img src={cameraIcon} alt="Tours Affiliate Link" width="38" height="38" className="camera-icon" />
                                </a>
                            ) : (
                                <div style={{ width: "50px", height: "50px", visibility: "hidden" }}></div> /* ✅ Empty placeholder */
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountryList;