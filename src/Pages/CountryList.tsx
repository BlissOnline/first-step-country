import React from 'react';
import { Country } from '../types';
//import goldObjectWithFlags from '../utilities/goldObjectWithFlags';
// interface Country {
//     name: string;
//     flagUrl: string;
// }

// interface CountryIndexProps {
//     filteredCountries: Country[];
// }

// Import all flag images
import flagAD from '../assets/flags/ad.png';
import flagAE from '../assets/flags/ae.png';
import flagAF from '../assets/flags/af.png';
import flagAG from '../assets/flags/ag.png';
import flagAI from '../assets/flags/ai.png';
import flagAL from '../assets/flags/al.png';
import flagAM from '../assets/flags/am.png';
import flagAO from '../assets/flags/ao.png';
import flagAR from '../assets/flags/ar.png';
import flagAS from '../assets/flags/as.png';
import flagAT from '../assets/flags/at.png';
import flagAU from '../assets/flags/au.png';
import flagAW from '../assets/flags/aw.png';
import flagAZ from '../assets/flags/az.png';
import flagBA from '../assets/flags/ba.png';
import flagBB from '../assets/flags/bb.png';
import flagBD from '../assets/flags/bd.png';
import flagBE from '../assets/flags/be.png';
import flagBF from '../assets/flags/bf.png';
import flagBG from '../assets/flags/bg.png';
import flagBH from '../assets/flags/bh.png';
import flagBI from '../assets/flags/bi.png';
import flagBJ from '../assets/flags/bj.png';
import flagBM from '../assets/flags/bm.png';
import flagBN from '../assets/flags/bn.png';
import flagBO from '../assets/flags/bo.png';
import flagBR from '../assets/flags/br.png';
import flagBS from '../assets/flags/bs.png';
import flagBT from '../assets/flags/bt.png';
import flagBW from '../assets/flags/bw.png';
import flagBY from '../assets/flags/by.png';
import flagBZ from '../assets/flags/bz.png';
import flagCA from '../assets/flags/ca.png';
import flagCD from '../assets/flags/cd.png';
import flagCF from '../assets/flags/cf.png';
import flagCG from '../assets/flags/cg.png';
import flagCH from '../assets/flags/ch.png';
import flagCI from '../assets/flags/ci.png';
import flagCL from '../assets/flags/cl.png';
import flagCM from '../assets/flags/cm.png';
import flagCN from '../assets/flags/cn.png';
import flagCO from '../assets/flags/co.png';
import flagCR from '../assets/flags/cr.png';
import flagCU from '../assets/flags/cu.png';
import flagCV from '../assets/flags/cv.png';
import flagCY from '../assets/flags/cy.png';
import flagCZ from '../assets/flags/cz.png';
import flagDE from '../assets/flags/de.png';
import flagDJ from '../assets/flags/dj.png';
import flagDK from '../assets/flags/dk.png';
//next 50
import flagDM from '../assets/flags/dm.png';
import flagDO from '../assets/flags/do.png';
import flagDZ from '../assets/flags/dz.png';
import flagEC from '../assets/flags/ec.png';
import flagEE from '../assets/flags/ee.png';
import flagEG from '../assets/flags/eg.png';
import flagER from '../assets/flags/er.png';
import flagES from '../assets/flags/es.png';
import flagET from '../assets/flags/et.png';
import flagFI from '../assets/flags/fi.png';
import flagFJ from '../assets/flags/fj.png';
import flagFM from '../assets/flags/fm.png';
import flagFR from '../assets/flags/fr.png';
import flagGA from '../assets/flags/ga.png';
import flagGB from '../assets/flags/gb.png';
import flagGD from '../assets/flags/gd.png';
import flagGE from '../assets/flags/ge.png';
import flagGH from '../assets/flags/gh.png';
import flagGM from '../assets/flags/gm.png';
import flagGN from '../assets/flags/gn.png';
import flagGQ from '../assets/flags/gq.png';
import flagGR from '../assets/flags/gr.png';
import flagGT from '../assets/flags/gt.png';
import flagGW from '../assets/flags/gw.png';
import flagGY from '../assets/flags/gy.png';
import flagHN from '../assets/flags/hn.png';
import flagHR from '../assets/flags/hr.png';
import flagHT from '../assets/flags/ht.png';
import flagHU from '../assets/flags/hu.png';
import flagID from '../assets/flags/id.png';
import flagIE from '../assets/flags/ie.png';
import flagIL from '../assets/flags/il.png';
import flagIN from '../assets/flags/in.png';
import flagIQ from '../assets/flags/iq.png';
import flagIR from '../assets/flags/ir.png';
import flagIS from '../assets/flags/is.png';
import flagIT from '../assets/flags/it.png';
import flagJM from '../assets/flags/jm.png';
import flagJO from '../assets/flags/jo.png';
import flagJP from '../assets/flags/jp.png';
import flagKE from '../assets/flags/ke.png';
import flagKG from '../assets/flags/kg.png';
import flagKH from '../assets/flags/kh.png';
import flagKI from '../assets/flags/ki.png';
import flagKM from '../assets/flags/km.png';
import flagKN from '../assets/flags/kn.png';
import flagKP from '../assets/flags/kp.png';
import flagKR from '../assets/flags/kr.png';
import flagKW from '../assets/flags/kw.png';
import flagKZ from '../assets/flags/kz.png';
//next 50
import flagLA from '../assets/flags/la.png';
import flagLB from '../assets/flags/lb.png';
import flagLC from '../assets/flags/lc.png';
import flagLI from '../assets/flags/li.png';
import flagLK from '../assets/flags/lk.png';
import flagLR from '../assets/flags/lr.png';
import flagLS from '../assets/flags/ls.png';
import flagLT from '../assets/flags/lt.png';
import flagLU from '../assets/flags/lu.png';
import flagLV from '../assets/flags/lv.png';
import flagLY from '../assets/flags/ly.png';
import flagMA from '../assets/flags/ma.png';
import flagMC from '../assets/flags/mc.png';
import flagMD from '../assets/flags/md.png';
import flagME from '../assets/flags/me.png';
import flagMG from '../assets/flags/mg.png';
import flagMH from '../assets/flags/mh.png';
import flagMK from '../assets/flags/mk.png';
import flagML from '../assets/flags/ml.png';
import flagMM from '../assets/flags/mm.png';
import flagMN from '../assets/flags/mn.png';
import flagMO from '../assets/flags/mo.png';
import flagMP from '../assets/flags/mp.png';
import flagMR from '../assets/flags/mr.png';
import flagMT from '../assets/flags/mt.png';
import flagMU from '../assets/flags/mu.png';
import flagMV from '../assets/flags/mv.png';
import flagMW from '../assets/flags/mw.png';
import flagMX from '../assets/flags/mx.png';
import flagMY from '../assets/flags/my.png';
import flagMZ from '../assets/flags/mz.png';
import flagNA from '../assets/flags/na.png';
import flagNE from '../assets/flags/ne.png';
import flagNG from '../assets/flags/ng.png';
import flagNI from '../assets/flags/ni.png';
import flagNL from '../assets/flags/nl.png';
import flagNO from '../assets/flags/no.png';
import flagNP from '../assets/flags/np.png';
import flagNR from '../assets/flags/nr.png';
import flagNU from '../assets/flags/nu.png';
import flagNZ from '../assets/flags/nz.png';
import flagOM from '../assets/flags/om.png';
import flagPA from '../assets/flags/pa.png';
import flagPE from '../assets/flags/pe.png';
import flagPF from '../assets/flags/pf.png';
import flagPG from '../assets/flags/pg.png';
import flagPH from '../assets/flags/ph.png';
import flagPK from '../assets/flags/pk.png';
import flagPL from '../assets/flags/pl.png';
import flagPT from '../assets/flags/pt.png';
//next 50
import flagPW from '../assets/flags/pw.png';
import flagPY from '../assets/flags/py.png';
import flagQA from '../assets/flags/qa.png';
import flagRO from '../assets/flags/ro.png';
import flagRS from '../assets/flags/rs.png';
import flagRU from '../assets/flags/ru.png';
import flagRW from '../assets/flags/rw.png';
import flagSA from '../assets/flags/sa.png';
import flagSB from '../assets/flags/sb.png';
import flagSC from '../assets/flags/sc.png';
import flagSD from '../assets/flags/sd.png';
import flagSE from '../assets/flags/se.png';
import flagSG from '../assets/flags/sg.png';
import flagSH from '../assets/flags/sh.png';
import flagSI from '../assets/flags/si.png';
import flagSK from '../assets/flags/sk.png';
import flagSL from '../assets/flags/sl.png';
import flagSM from '../assets/flags/sm.png';
import flagSN from '../assets/flags/sn.png';
import flagSO from '../assets/flags/so.png';
import flagSR from '../assets/flags/sr.png';
import flagSS from '../assets/flags/ss.png';
import flagST from '../assets/flags/st.png';
import flagSV from '../assets/flags/sv.png';
import flagSY from '../assets/flags/sy.png';
import flagSZ from '../assets/flags/sz.png';
import flagTC from '../assets/flags/tc.png';
import flagTD from '../assets/flags/td.png';
import flagTG from '../assets/flags/tg.png';
import flagTH from '../assets/flags/th.png';
import flagTJ from '../assets/flags/tj.png';
import flagTL from '../assets/flags/tl.png';
import flagTM from '../assets/flags/tm.png';
import flagTN from '../assets/flags/tn.png';
import flagTO from '../assets/flags/to.png';
import flagTR from '../assets/flags/tr.png';
import flagTT from '../assets/flags/tt.png';
import flagTV from '../assets/flags/tv.png';
import flagTZ from '../assets/flags/tz.png';
import flagUA from '../assets/flags/ua.png';
import flagUG from '../assets/flags/ug.png';
import flagUS from '../assets/flags/us.png';
import flagUY from '../assets/flags/uy.png';
import flagUZ from '../assets/flags/uz.png';
import flagVA from '../assets/flags/va.png';
import flagVC from '../assets/flags/vc.png';
import flagVE from '../assets/flags/ve.png';
import flagVN from '../assets/flags/vn.png';
import flagVU from '../assets/flags/vu.png';
//last bit
import flagWS from '../assets/flags/ws.png';
import flagYE from '../assets/flags/ye.png';
import flagZA from '../assets/flags/za.png';
import flagZM from '../assets/flags/zm.png';
import flagZW from '../assets/flags/zw.png';

// Create a map of country codes to flag images
const flagMap: { [key: string]: string } = {
    'ad': flagAD,
    'ae': flagAE,
    'af': flagAF,
    'ag': flagAG,
    'ai': flagAI,
    'al': flagAL,
    'am': flagAM,
    'ao': flagAO,
    'ar': flagAR,
    'as': flagAS,
    'at': flagAT,
    'au': flagAU,
    'aw': flagAW,
    'az': flagAZ,
    'ba': flagBA,
    'bb': flagBB,
    'bd': flagBD,
    'be': flagBE,
    'bf': flagBF,
    'bg': flagBG,
    'bh': flagBH,
    'bi': flagBI,
    'bj': flagBJ,
    'bm': flagBM,
    'bn': flagBN,
    'bo': flagBO,
    'br': flagBR,
    'bs': flagBS,
    'bt': flagBT,
    'bw': flagBW,
    'by': flagBY,
    'bz': flagBZ,
    'ca': flagCA,
    'cd': flagCD,
    'cf': flagCF,
    'cg': flagCG,
    'ch': flagCH,
    'ci': flagCI,
    'cl': flagCL,
    'cm': flagCM,
    'cn': flagCN,
    'co': flagCO,
    'cr': flagCR,
    'cu': flagCU,
    'cv': flagCV,
    'cy': flagCY,
    'cz': flagCZ,
    'de': flagDE,
    'dj': flagDJ,
    'dk': flagDK,
// next 50
    'dm': flagDM,
    'do': flagDO,
    'dz': flagDZ,
    'ec': flagEC,
    'ee': flagEE,
    'eg': flagEG,
    'er': flagER,
    'es': flagES,
    'et': flagET,
    'fi': flagFI,
    'fj': flagFJ,
    'fm': flagFM,
    'fr': flagFR,
    'ga': flagGA,
    'gb': flagGB,
    'gd': flagGD,
    'ge': flagGE,
    'gh': flagGH,
    'gm': flagGM,
    'gn': flagGN,
    'gq': flagGQ,
    'gr': flagGR,
    'gt': flagGT,
    'gw': flagGW,
    'gy': flagGY,
    'hn': flagHN,
    'hr': flagHR,
    'ht': flagHT,
    'hu': flagHU,
    'id': flagID,
    'ie': flagIE,
    'il': flagIL,
    'in': flagIN,
    'iq': flagIQ,
    'ir': flagIR,
    'is': flagIS,
    'it': flagIT,
    'jm': flagJM,
    'jo': flagJO,
    'jp': flagJP,
    'ke': flagKE,
    'kg': flagKG,
    'kh': flagKH,
    'ki': flagKI,
    'km': flagKM,
    'kn': flagKN,
    'kp': flagKP,
    'kr': flagKR,
    'kw': flagKW,
    'kz': flagKZ,
    //next 50
    'la': flagLA,
    'lb': flagLB,
    'lc': flagLC,
    'li': flagLI,
    'lk': flagLK,
    'lr': flagLR,
    'ls': flagLS,
    'lt': flagLT,
    'lu': flagLU,
    'lv': flagLV,
    'ly': flagLY,
    'ma': flagMA,
    'mc': flagMC,
    'md': flagMD,
    'me': flagME,
    'mg': flagMG,
    'mh': flagMH,
    'mk': flagMK,
    'ml': flagML,
    'mm': flagMM,
    'mn': flagMN,
    'mo': flagMO,
    'mp': flagMP,
    'mr': flagMR,
    'mt': flagMT,
    'mu': flagMU,
    'mv': flagMV,
    'mw': flagMW,
    'mx': flagMX,
    'my': flagMY,
    'mz': flagMZ,
    'na': flagNA,
    'ne': flagNE,
    'ng': flagNG,
    'ni': flagNI,
    'nl': flagNL,
    'no': flagNO,
    'np': flagNP,
    'nr': flagNR,
    'nu': flagNU,
    'nz': flagNZ,
    'om': flagOM,
    'pa': flagPA,
    'pe': flagPE,
    'pf': flagPF,
    'pg': flagPG,
    'ph': flagPH,
    'pk': flagPK,
    'pl': flagPL,
    'pt': flagPT,  
    //next 50
    'pw': flagPW,
    'py': flagPY,
    'qa': flagQA,
    'ro': flagRO,
    'rs': flagRS,
    'ru': flagRU,
    'rw': flagRW,
    'sa': flagSA,
    'sb': flagSB,
    'sc': flagSC,
    'sd': flagSD,
    'se': flagSE,
    'sg': flagSG,
    'sh': flagSH,
    'si': flagSI,
    'sk': flagSK,
    'sl': flagSL,
    'sm': flagSM,
    'sn': flagSN,
    'so': flagSO,
    'sr': flagSR,
    'ss': flagSS,
    'st': flagST,
    'sv': flagSV,
    'sy': flagSY,
    'sz': flagSZ,
    'tc': flagTC,
    'td': flagTD,
    'tg': flagTG,
    'th': flagTH,
    'tj': flagTJ,
    'tl': flagTL,
    'tm': flagTM,
    'tn': flagTN,
    'to': flagTO,
    'tr': flagTR,
    'tt': flagTT,
    'tv': flagTV,
    'tz': flagTZ,
    'ua': flagUA,
    'ug': flagUG,
    'us': flagUS,
    'uy': flagUY,
    'uz': flagUZ,
    'va': flagVA,
    'vc': flagVC,
    've': flagVE,
    'vn': flagVN,
    'vu': flagVU,
    //last bit
    'ws': flagWS,
    'ye': flagYE,
    'za': flagZA,
    'zm': flagZM,
    'zw': flagZW,
  };
  


const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
    //console.log(country.countryCode, flagMap[country.countryCode]);
    //console.log('Country Code:', country.countryCode);
    return (
        <div>
            <div>
                <img src={flagCA} alt="" />
            </div>
            {countries.map((country, index) => (
                <div  
                    key={index} 
                    style={{ 
                        backgroundColor: index % 2 === 0 ? '#f5d7b2' : '#f7e3c6', 
                        padding: '10px', 
                        display: 'flex', 
                        alignItems: 'center'
                }}>
                    {country.countryCode && flagMap[country.countryCode] ? (
                        <img 
                            //src={require(`..assets/flags/${country.countryCode}.png`).default}
                            // src={flagMap[country.countryCode]} 
                            src={flagMap[country.countryCode]} 
                            // src={`../assets/flags/${country.countryCode}.png`}
                            alt={`${country.name} flag`} 
                            style={{ width: '50px', marginRight: '10px' }}  
                        />
                    ) : (
                        <span>No flag available for</span> 
                    )} 
                    <span>{country.name}</span>
                </div>
            ))}
        </div>
    );
};

export default CountryList;