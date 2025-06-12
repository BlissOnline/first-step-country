"use client";

import React, { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Country, CountryLinks } from '@/lib/types';


import countryLinksDataRaw from "@/lib/data/countryLinks.json";
const countryLinksData: CountryLinks = countryLinksDataRaw  as unknown as CountryLinks; // ✅ Explicit type assertion

// import countryLinksData from '@/public/data/countryLinks.json';
// import './CountryList.css';

// Create a map of country codes to flag images
//const flagMap: { [key: string]: () => Promise<{ default: string }> } = {
const flagMap: { [key: string]: string } = {
    'AD': '/flags/ad.svg',
    'AE': '/flags/ae.svg',
    'AF': '/flags/af.svg',
    'AG': '/flags/ag.svg',
    'AI': '/flags/ai.svg',
    'AL': '/flags/al.svg',
    'AM': '/flags/am.svg',
    'AO': '/flags/ao.svg',
    'AR': '/flags/ar.svg',
    'AS': '/flags/as.svg',
    'AT': '/flags/at.svg',
    'AU': '/flags/au.svg',
    'AW': '/flags/aw.svg',
    'AZ': '/flags/az.svg',
    'BA': '/flags/ba.svg',
    'BB': '/flags/bb.svg',
    'BD': '/flags/bd.svg',
    'BE': '/flags/be.svg',
    'BF': '/flags/bf.svg',
    'BG': '/flags/bg.svg',
    'BH': '/flags/bh.svg',
    'BI': '/flags/bi.svg',
    'BJ': '/flags/bj.svg',
    'BM': '/flags/bm.svg',
    'BN': '/flags/bn.svg',
    'BO': '/flags/bo.svg',
    'BR': '/flags/br.svg',
    'BS': '/flags/bs.svg',
    'BT': '/flags/bt.svg',
    'BW': '/flags/bw.svg',
    'BY': '/flags/by.svg',
    'BZ': '/flags/bz.svg',
    'CA': '/flags/ca.svg',
    'CD': '/flags/cd.svg',
    'CF': '/flags/cf.svg',
    'CG': '/flags/cg.svg',
    'CH': '/flags/ch.svg',
    'CI': '/flags/ci.svg',
    'CL': '/flags/cl.svg',
    'CM': '/flags/cm.svg',
    'CN': '/flags/cn.svg',
    'CO': '/flags/co.svg',
    'CR': '/flags/cr.svg',
    'CU': '/flags/cu.svg',
    'CV': '/flags/cv.svg',
    'CY': '/flags/cy.svg',
    'CZ': '/flags/cz.svg',
    'DE': '/flags/de.svg',
    'DJ': '/flags/dj.svg',
    'DK': '/flags/dk.svg',
    'DM': '/flags/dm.svg',
    'DO': '/flags/do.svg',
    'DZ': '/flags/dz.svg',
    //next 50
    'EC': '/flags/ec.svg',
    'EE': '/flags/ee.svg',
    'EG': '/flags/eg.svg',
    'ER': '/flags/er.svg',
    'ES': '/flags/es.svg',
    'ET': '/flags/et.svg',
    'FI': '/flags/fi.svg',
    'FJ': '/flags/fj.svg',
    'FM': '/flags/fm.svg',
    'FR': '/flags/fr.svg',
    'GA': '/flags/ga.svg',
    'GB': '/flags/gb.svg',
    'GD': '/flags/gd.svg',
    'GE': '/flags/ge.svg',
    'GH': '/flags/gh.svg',
    'GM': '/flags/gm.svg',
    'GN': '/flags/gn.svg',
    'GQ': '/flags/gq.svg',
    'GR': '/flags/gr.svg',
    'GT': '/flags/gt.svg',
    'GW': '/flags/gw.svg',
    'GY': '/flags/gy.svg',
    'HN': '/flags/hn.svg',
    'HR': '/flags/hr.svg',
    'HT': '/flags/ht.svg',
    'HU': '/flags/hu.svg',
    'ID': '/flags/id.svg',
    'IE': '/flags/ie.svg',
    'IL': '/flags/il.svg',
    'IN': '/flags/in.svg',
    'IQ': '/flags/iq.svg',
    'IR': '/flags/ir.svg',
    'IS': '/flags/is.svg',
    'IT': '/flags/it.svg',
    'JM': '/flags/jm.svg',
    'JO': '/flags/jo.svg',
    'JP': '/flags/jp.svg',
    'KE': '/flags/ke.svg',
    'KG': '/flags/kg.svg',
    'KH': '/flags/kh.svg',
    'KI': '/flags/ki.svg',
    'KM': '/flags/km.svg',
    'KN': '/flags/kn.svg',
    'KP': '/flags/kp.svg',
    'KR': '/flags/kr.svg',
    'KW': '/flags/kw.svg',
    'KZ': '/flags/kz.svg',
    'LA': '/flags/la.svg',
    //next 50
    'LB': '/flags/lb.svg',
    'LC': '/flags/lc.svg',
    'LI': '/flags/li.svg',
    'LK': '/flags/lk.svg',
    'LR': '/flags/lr.svg',
    'LS': '/flags/ls.svg',
    'LT': '/flags/lt.svg',
    'LU': '/flags/lu.svg',
    'LV': '/flags/lv.svg',
    'LY': '/flags/ly.svg',
    'MA': '/flags/ma.svg',
    'MC': '/flags/mc.svg',
    'MD': '/flags/md.svg',
    'ME': '/flags/me.svg',
    'MG': '/flags/mg.svg',
    'MH': '/flags/mh.svg',
    'MK': '/flags/mk.svg',
    'ML': '/flags/ml.svg',
    'MM': '/flags/mm.svg',
    'MN': '/flags/mn.svg',
    'MO': '/flags/mo.svg',
    'MP': '/flags/mp.svg',
    'MR': '/flags/mr.svg',
    'MT': '/flags/mt.svg',
    'MU': '/flags/mu.svg',
    'MV': '/flags/mv.svg',
    'MW': '/flags/mw.svg',
    'MX': '/flags/mx.svg',
    'MY': '/flags/my.svg',
    'MZ': '/flags/mz.svg',
    'NA': '/flags/na.svg',
    'NE': '/flags/ne.svg',
    'NG': '/flags/ng.svg',
    'NI': '/flags/ni.svg',
    'NL': '/flags/nl.svg',
    'NO': '/flags/no.svg',
    'NP': '/flags/np.svg',
    'NR': '/flags/nr.svg',
    'NU': '/flags/nu.svg',
    'NZ': '/flags/nz.svg',
    'OM': '/flags/om.svg',
    'PA': '/flags/pa.svg',
    'PE': '/flags/pe.svg',
    'PF': '/flags/pf.svg',
    'PG': '/flags/pg.svg',
    'PH': '/flags/ph.svg',
    'PK': '/flags/pk.svg',
    'PL': '/flags/pl.svg',
    'PS': '/flags/ps.svg',
    'PT': '/flags/pt.svg',
    'PW': '/flags/pw.svg',
    'PY': '/flags/py.svg',
    'QA': '/flags/qa.svg',
    //next 50
    'RO': '/flags/ro.svg',
    'RS': '/flags/rs.svg',
    'RU': '/flags/ru.svg',
    'RW': '/flags/rw.svg',
    'SA': '/flags/sa.svg',
    'SB': '/flags/sb.svg',
    'SC': '/flags/sc.svg',
    'SD': '/flags/sd.svg',
    'SE': '/flags/se.svg',
    'SG': '/flags/sg.svg',
    'SH': '/flags/sh.svg',
    'SI': '/flags/si.svg',
    'SK': '/flags/sk.svg',
    'SL': '/flags/sl.svg',
    'SM': '/flags/sm.svg',
    'SN': '/flags/sn.svg',
    'SO': '/flags/so.svg',
    'SR': '/flags/sr.svg',
    'SS': '/flags/ss.svg',
    'ST': '/flags/st.svg',
    'SV': '/flags/sv.svg',
    'SY': '/flags/sy.svg',
    'SZ': '/flags/sz.svg',
    'TC': '/flags/tc.svg',
    'TD': '/flags/td.svg',
    'TG': '/flags/tg.svg',
    'TH': '/flags/th.svg',
    'TJ': '/flags/tj.svg',
    'TL': '/flags/tl.svg',
    'TM': '/flags/tm.svg',
    'TN': '/flags/tn.svg',
    'TO': '/flags/to.svg',
    'TR': '/flags/tr.svg',
    'TT': '/flags/tt.svg',
    'TV': '/flags/tv.svg',
    'TW': '/flags/tw.svg',
    'TZ': '/flags/tz.svg',
    'UA': '/flags/ua.svg',
    'UG': '/flags/ug.svg',
    'US': '/flags/us.svg',
    'UY': '/flags/uy.svg',
    'UZ': '/flags/uz.svg',
    'VA': '/flags/va.svg',
    'VC': '/flags/vc.svg',
    'VE': '/flags/ve.svg',
    'VN': '/flags/vn.svg',
    'VU': '/flags/vu.svg',
    'WS': '/flags/ws.svg',
    'YE': '/flags/ye.svg',
    'ZA': '/flags/za.svg',
    'ZM': '/flags/zm.svg',
    'ZW': '/flags/zw.svg'
};
  


const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
    // ✅ Remove `flagUrls` since it's unused
    // const [flagUrls, setFlagUrls] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        // ✅ No need to process flag URLs anymore, since we use `flagMap` directly
    }, []);

    // ✅ Merge affiliate links into countries dynamically
    const affiliateCountries = countries.map(country => ({
        ...country,
        affiliateLinks: countryLinksData[country.name] || { flights: [], hotels: [], attractions: [] }
    }));

    return (
        <div>
            {affiliateCountries.map((country, index) => {
                // ✅ Define `flagSrc` inside `.map()`, before returning JSX
                const flagSrc = country.countryCode
                    ? flagMap[country.countryCode as keyof typeof flagMap] || '/flags/default-flag.svg'
                    : '/flags/default-flag.svg';

                return (
                    <div
                        className="indexBar"
                        key={index}
                        style={{
                            backgroundColor: index % 2 === 0 ? '#f5d7b2' : '#f7e3c6',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Image src={flagSrc} alt={`${country.name} flag`} width={50} height={30} priority={false} />
                        <span id="country-title">{country.name}</span>

                        {/* ✅ Affiliate links */}
                        <div className="affiliate-links">
                            {/* Flights */}
                            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {country.affiliateLinks.flights && (
                                    <a href={country.affiliateLinks.flights} target="_blank" rel="nofollow noopener">
                                        <Image 
                                            src="/icons/airplane-svg.svg" 
                                            alt="Flights Affiliate Link" 
                                            width={50} 
                                            height={50} 
                                            priority={false} 
                                        />
                                    </a>
                                )}
                            </div>

                            {/* Hotels */}
                            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {country.affiliateLinks.hotels && (
                                    <a href={country.affiliateLinks.hotels} target="_blank" rel="nofollow noopener">
                                        <Image 
                                            src="/icons/hotel-svg.svg" 
                                            alt="Hotels Affiliate Link" 
                                            width={40} 
                                            height={40} 
                                            priority={false} 
                                        />
                                    </a>
                                )}
                            </div>

                            {/* Attractions */}
                            <div style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {country.affiliateLinks.attractions && (
                                    <a href={country.affiliateLinks.attractions} target="_blank" rel="nofollow noopener">
                                        <Image 
                                            src="/icons/camera-svg.svg" 
                                            alt="Tours Affiliate Link" 
                                            width={38} 
                                            height={38} 
                                            priority={false} 
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CountryList;