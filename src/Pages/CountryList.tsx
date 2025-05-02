import React, { useEffect, useState} from 'react';
import { Country, countryLinks } from '../types';
import './CountryList.css';

// Create a map of country codes to flag images
const flagMap: { [key: string]: () => Promise<{ default: string }> } = {
    'AD': () => import('../assets/flags/ad.png'),
    'AE': () => import('../assets/flags/ae.png'),
    'AF': () => import('../assets/flags/af.png'),
    'AG': () => import('../assets/flags/ag.png'),
    'AI': () => import('../assets/flags/ai.png'),
    'AL': () => import('../assets/flags/al.png'),
    'AM': () => import('../assets/flags/am.png'),
    'AO': () => import('../assets/flags/ao.png'),
    'AR': () => import('../assets/flags/ar.png'),
    'AS': () => import('../assets/flags/as.png'),
    'AT': () => import('../assets/flags/at.png'),
    'AU': () => import('../assets/flags/au.png'),
    'AW': () => import('../assets/flags/aw.png'),
    'AZ': () => import('../assets/flags/az.png'),
    'BA': () => import('../assets/flags/ba.png'),
    'BB': () => import('../assets/flags/bb.png'),
    'BD': () => import('../assets/flags/bd.png'),
    'BE': () => import('../assets/flags/be.png'),
    'BF': () => import('../assets/flags/bf.png'),
    'BG': () => import('../assets/flags/bg.png'),
    'BH': () => import('../assets/flags/bh.png'),
    'BI': () => import('../assets/flags/bi.png'),
    'BJ': () => import('../assets/flags/bj.png'),
    'BM': () => import('../assets/flags/bm.png'),
    'BN': () => import('../assets/flags/bn.png'),
    'BO': () => import('../assets/flags/bo.png'),
    'BR': () => import('../assets/flags/br.png'),
    'BS': () => import('../assets/flags/bs.png'),
    'BT': () => import('../assets/flags/bt.png'),
    'BW': () => import('../assets/flags/bw.png'),
    'BY': () => import('../assets/flags/by.png'),
    'BZ': () => import('../assets/flags/bz.png'),
    'CA': () => import('../assets/flags/ca.png'),
    'CD': () => import('../assets/flags/cd.png'),
    'CF': () => import('../assets/flags/cf.png'),
    'CG': () => import('../assets/flags/cg.png'),
    'CH': () => import('../assets/flags/ch.png'),
    'CI': () => import('../assets/flags/ci.png'),
    'CL': () => import('../assets/flags/cl.png'),
    'CM': () => import('../assets/flags/cm.png'),
    'CN': () => import('../assets/flags/cn.png'),
    'CO': () => import('../assets/flags/co.png'),
    'CR': () => import('../assets/flags/cr.png'),
    'CU': () => import('../assets/flags/cu.png'),
    'CV': () => import('../assets/flags/cv.png'),
    'CY': () => import('../assets/flags/cy.png'),
    'CZ': () => import('../assets/flags/cz.png'),
    'DE': () => import('../assets/flags/de.png'),
    'DJ': () => import('../assets/flags/dj.png'),
    'DK': () => import('../assets/flags/dk.png'),
    'DM': () => import('../assets/flags/dm.png'),
    'DO': () => import('../assets/flags/do.png'),
    'DZ': () => import('../assets/flags/dz.png'),
    //next 50
    'EC': () => import('../assets/flags/ec.png'),
    'EE': () => import('../assets/flags/ee.png'),
    'EG': () => import('../assets/flags/eg.png'),
    'ER': () => import('../assets/flags/er.png'),
    'ES': () => import('../assets/flags/es.png'),
    'ET': () => import('../assets/flags/et.png'),
    'FI': () => import('../assets/flags/fi.png'),
    'FJ': () => import('../assets/flags/fj.png'),
    'FM': () => import('../assets/flags/fm.png'),
    'FR': () => import('../assets/flags/fr.png'),
    'GA': () => import('../assets/flags/ga.png'),
    'GB': () => import('../assets/flags/gb.png'),
    'GD': () => import('../assets/flags/gd.png'),
    'GE': () => import('../assets/flags/ge.png'),
    'GH': () => import('../assets/flags/gh.png'),
    'GM': () => import('../assets/flags/gm.png'),
    'GN': () => import('../assets/flags/gn.png'),
    'GQ': () => import('../assets/flags/gq.png'),
    'GR': () => import('../assets/flags/gr.png'),
    'GT': () => import('../assets/flags/gt.png'),
    'GW': () => import('../assets/flags/gw.png'),
    'GY': () => import('../assets/flags/gy.png'),
    'HN': () => import('../assets/flags/hn.png'),
    'HR': () => import('../assets/flags/hr.png'),
    'HT': () => import('../assets/flags/ht.png'),
    'HU': () => import('../assets/flags/hu.png'),
    'ID': () => import('../assets/flags/id.png'),
    'IE': () => import('../assets/flags/ie.png'),
    'IL': () => import('../assets/flags/il.png'),
    'IN': () => import('../assets/flags/in.png'),
    'IQ': () => import('../assets/flags/iq.png'),
    'IR': () => import('../assets/flags/ir.png'),
    'IS': () => import('../assets/flags/is.png'),
    'IT': () => import('../assets/flags/it.png'),
    'JM': () => import('../assets/flags/jm.png'),
    'JO': () => import('../assets/flags/jo.png'),
    'JP': () => import('../assets/flags/jp.png'),
    'KE': () => import('../assets/flags/ke.png'),
    'KG': () => import('../assets/flags/kg.png'),
    'KH': () => import('../assets/flags/kh.png'),
    'KI': () => import('../assets/flags/ki.png'),
    'KM': () => import('../assets/flags/km.png'),
    'KN': () => import('../assets/flags/kn.png'),
    'KP': () => import('../assets/flags/kp.png'),
    'KR': () => import('../assets/flags/kr.png'),
    'KW': () => import('../assets/flags/kw.png'),
    'KZ': () => import('../assets/flags/kz.png'),
    'LA': () => import('../assets/flags/la.png'),
    //next 50
    'LB': () => import('../assets/flags/lb.png'),
    'LC': () => import('../assets/flags/lc.png'),
    'LI': () => import('../assets/flags/li.png'),
    'LK': () => import('../assets/flags/lk.png'),
    'LR': () => import('../assets/flags/lr.png'),
    'LS': () => import('../assets/flags/ls.png'),
    'LT': () => import('../assets/flags/lt.png'),
    'LU': () => import('../assets/flags/lu.png'),
    'LV': () => import('../assets/flags/lv.png'),
    'LY': () => import('../assets/flags/ly.png'),
    'MA': () => import('../assets/flags/ma.png'),
    'MC': () => import('../assets/flags/mc.png'),
    'MD': () => import('../assets/flags/md.png'),
    'ME': () => import('../assets/flags/me.png'),
    'MG': () => import('../assets/flags/mg.png'),
    'MH': () => import('../assets/flags/mh.png'),
    'MK': () => import('../assets/flags/mk.png'),
    'ML': () => import('../assets/flags/ml.png'),
    'MM': () => import('../assets/flags/mm.png'),
    'MN': () => import('../assets/flags/mn.png'),
    'MO': () => import('../assets/flags/mo.png'),
    'MP': () => import('../assets/flags/mp.png'),
    'MR': () => import('../assets/flags/mr.png'),
    'MT': () => import('../assets/flags/mt.png'),
    'MU': () => import('../assets/flags/mu.png'),
    'MV': () => import('../assets/flags/mv.png'),
    'MW': () => import('../assets/flags/mw.png'),
    'MX': () => import('../assets/flags/mx.png'),
    'MY': () => import('../assets/flags/my.png'),
    'MZ': () => import('../assets/flags/mz.png'),
    'NA': () => import('../assets/flags/na.png'),
    'NE': () => import('../assets/flags/ne.png'),
    'NG': () => import('../assets/flags/ng.png'),
    'NI': () => import('../assets/flags/ni.png'),
    'NL': () => import('../assets/flags/nl.png'),
    'NO': () => import('../assets/flags/no.png'),
    'NP': () => import('../assets/flags/np.png'),
    'NR': () => import('../assets/flags/nr.png'),
    'NU': () => import('../assets/flags/nu.png'),
    'NZ': () => import('../assets/flags/nz.png'),
    'OM': () => import('../assets/flags/om.png'),
    'PA': () => import('../assets/flags/pa.png'),
    'PE': () => import('../assets/flags/pe.png'),
    'PF': () => import('../assets/flags/pf.png'),
    'PG': () => import('../assets/flags/pg.png'),
    'PH': () => import('../assets/flags/ph.png'),
    'PK': () => import('../assets/flags/pk.png'),
    'PL': () => import('../assets/flags/pl.png'),
    'PS': () => import('../assets/flags/ps.png'),
    'PT': () => import('../assets/flags/pt.png'),
    'PW': () => import('../assets/flags/pw.png'),
    'PY': () => import('../assets/flags/py.png'),
    'QA': () => import('../assets/flags/qa.png'),
    //next 50
    'RO': () => import('../assets/flags/ro.png'),
    'RS': () => import('../assets/flags/rs.png'),
    'RU': () => import('../assets/flags/ru.png'),
    'RW': () => import('../assets/flags/rw.png'),
    'SA': () => import('../assets/flags/sa.png'),
    'SB': () => import('../assets/flags/sb.png'),
    'SC': () => import('../assets/flags/sc.png'),
    'SD': () => import('../assets/flags/sd.png'),
    'SE': () => import('../assets/flags/se.png'),
    'SG': () => import('../assets/flags/sg.png'),
    'SH': () => import('../assets/flags/sh.png'),
    'SI': () => import('../assets/flags/si.png'),
    'SK': () => import('../assets/flags/sk.png'),
    'SL': () => import('../assets/flags/sl.png'),
    'SM': () => import('../assets/flags/sm.png'),
    'SN': () => import('../assets/flags/sn.png'),
    'SO': () => import('../assets/flags/so.png'),
    'SR': () => import('../assets/flags/sr.png'),
    'SS': () => import('../assets/flags/ss.png'),
    'ST': () => import('../assets/flags/st.png'),
    'SV': () => import('../assets/flags/sv.png'),
    'SY': () => import('../assets/flags/sy.png'),
    'SZ': () => import('../assets/flags/sz.png'),
    'TC': () => import('../assets/flags/tc.png'),
    'TD': () => import('../assets/flags/td.png'),
    'TG': () => import('../assets/flags/tg.png'),
    'TH': () => import('../assets/flags/th.png'),
    'TJ': () => import('../assets/flags/tj.png'),
    'TL': () => import('../assets/flags/tl.png'),
    'TM': () => import('../assets/flags/tm.png'),
    'TN': () => import('../assets/flags/tn.png'),
    'TO': () => import('../assets/flags/to.png'),
    'TR': () => import('../assets/flags/tr.png'),
    'TT': () => import('../assets/flags/tt.png'),
    'TV': () => import('../assets/flags/tv.png'),
    'TW': () => import('../assets/flags/tw.png'),
    'TZ': () => import('../assets/flags/tz.png'),
    'UA': () => import('../assets/flags/ua.png'),
    'UG': () => import('../assets/flags/ug.png'),
    'US': () => import('../assets/flags/us.png'),
    'UY': () => import('../assets/flags/uy.png'),
    'UZ': () => import('../assets/flags/uz.png'),
    'VA': () => import('../assets/flags/va.png'),
    'VC': () => import('../assets/flags/vc.png'),
    'VE': () => import('../assets/flags/ve.png'),
    'VN': () => import('../assets/flags/vn.png'),
    'VU': () => import('../assets/flags/vu.png'),
    'WS': () => import('../assets/flags/ws.png'),
    'YE': () => import('../assets/flags/ye.png'),
    'ZA': () => import('../assets/flags/za.png'),
    'ZM': () => import('../assets/flags/zm.png'),
    'ZW': () => import('../assets/flags/zw.png'),
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
                    {country.affiliateLinks && (
                        <>
                            {country.affiliateLinks?.flights && (
                                <a href={country.affiliateLinks.flights} target="_blank" rel="nofollow noopener">
                                    <img src="/src/assets/icons/airplane-svg.svg" alt="Flights Affiliate Link" width="50" height="50" />
                                </a>
                            )}

                            {country.affiliateLinks?.hotels && (
                                <a href={country.affiliateLinks.hotels} target="_blank" rel="nofollow noopener">
                                    <img src="/src/assets/icons/hotel-svg.svg" alt="Hotels Affiliate Link" width="40" height="40" />
                                </a>
                            )}

                            {country.affiliateLinks?.attractions && (
                                <a href={country.affiliateLinks.attractions} target="_blank" rel="nofollow noopener">
                                    <img src="/src/assets/icons/camera-svg.svg" alt="Tours Affiliate Link" width="38" height="38" className='camera-icon'/>
                                </a>
                            )}
                        </>
                    )}

                </div>
            ))}
        </div>
    );
};

export default CountryList;