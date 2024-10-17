import{c as r,l as b,bc as u,a as p,j as t,B as i,o as C,G as c,T as a,S as s,bR as T,bU as F,bi as W,t as S}from"./index-BcecFl1Z.js";import{C as z}from"./CustomButtons-2kTcvzb6.js";import{d as k}from"./HelperFunctions-DWwEU7oF.js";import{p as I}from"./pdf-container-img-ChRV-rEw.js";import{N as R}from"./Navbar-5U6_2lyq.js";const n={whitepaperText:{color:r.gray6,textTransform:"capitalize",fontWeight:200},whitepaperTitle:{fontSize:{xs:"2.375rem",sm:"2.875rem",md:"3.375rem"},fontFamily:"Noto Serif",fontWeight:700,color:r.white,textTransform:"capitalize"},headerTags:{color:r.gray2,fontWeight:300,fontFamily:"Chivo",textTransform:"capitalize"},headerViewMoreText:{color:r.gray2,fontWeight:300,fontFamily:"Chivo",textTransform:"capitalize",ml:2},orangeRightDivider:{height:"2px",width:"100%",opacity:.4,my:"14px",background:"linear-gradient(90deg, #07161E 0%, #F67141 100%)"},logoContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"},thumbnailContainer:{width:"100%",maxWidth:"1168px",mx:"auto",height:"330px",mt:"4rem",boxShadow:" -4px -4px 26px 0px rgba(0, 0, 0, 0.14), 4px 4px 26px 0px rgba(0, 0, 0, 0.14)"},summaryContainer:{display:"flex",flexDirection:"column",gap:"1.313rem"},summaryDivider:{height:"2px",width:"220px",opacity:.4,background:"linear-gradient(270deg, #FFF 0%, #F67141 100%)"},pdfContainer:{width:"100%",boxShadow:"-2px -2px 32px 0px rgba(0, 0, 0, 0.08), 2px 2px 33px 0px rgba(0, 0, 0, 0.06)",position:"sticky",top:"5%"},pdfContainerBg:{position:"absolute",minHeight:"478px",width:"87%",objectFit:"cover"},pdfTitleContainer:{minHeight:"478px",position:"relative",px:2,pt:"41px"},pdfWhitepaperTitle:{color:r.black1,fontWeight:700,lineHeight:"165%",textTransform:"capitalize"},pdfViewMoreText:{color:r.black1,fontWeight:300,textTransform:"capitalize",ml:2},viewWhitePaperBtn:{width:"100%",bgcolor:r.black1,":hover":{bgcolor:r.black1},height:"54px",fontFamily:"Chivo",fontSize:"14px",fontWeight:700},footerContainer:{display:"flex",justifyContent:"center",alignItems:"center",mt:"6.25rem",pb:"6.25rem"},footerChip:{height:"3rem",borderRadius:"75px",bgcolor:r.gray9,fontSize:"16px",fontWeight:400,color:r.black1,fontFamily:"Chivo",border:"none"}},v=({previewData:e})=>{const{tagsFilteredData:d}=b(u),[f,g]=p.useState(!1),[m,j]=p.useState([]),y=async o=>{var l,x;g(!0);try{const h=await S({id:o});j((x=(l=h==null?void 0:h.data)==null?void 0:l.data)==null?void 0:x.data)}catch(h){console.log(h)}finally{g(!1)}};return p.useEffect(()=>{e.companyId!=-1&&y(e.companyId)},[e]),t.jsxs(i,{sx:C.previewContainerHeight,children:[t.jsx(i,{sx:{background:`linear-gradient(to bottom, ${r.background} 85%, white 20%)`,px:"10%"},children:t.jsxs(i,{pt:"10.75rem",sx:{position:"relative"},children:[t.jsx(i,{sx:{pointerEvents:"none"},children:t.jsx(R,{})}),t.jsx(i,{children:t.jsxs(c,{container:!0,spacing:8,children:[t.jsx(c,{item:!0,xs:9,children:t.jsxs(i,{display:"flex",flexDirection:"column",gap:"1.813rem",children:[t.jsx(a,{variant:"body2",sx:n.whitepaperText,children:"WHITE PAPER"}),e.whitepaperTitle.length===0?t.jsx(s,{variant:"text",sx:{fontSize:{xs:"2.375rem",sm:"2.875rem",md:"3.375rem"},bgcolor:"gray"}}):t.jsx(a,{sx:n.whitepaperTitle,children:e.whitepaperTitle}),e.tags.length===0?t.jsx(s,{variant:"text",sx:{fontSize:{xs:"14px",sm:"16px",md:"18px"},bgcolor:"gray"}}):t.jsxs(i,{display:"flex",flexWrap:"wrap",children:[e.tags.slice(0,3).map((o,l)=>{var x;return t.jsxs(i,{display:"flex",justifyContent:"center",alignItems:"center",children:[t.jsx(a,{variant:"h6",sx:n.headerTags,children:(x=d.find(h=>h.id===o))==null?void 0:x.name}),l!==2&&t.jsx(i,{mx:2,height:"4px",width:"4px",borderRadius:"69px",bgcolor:r.gray15})]},o)}),e.tags.length>3&&t.jsxs(a,{variant:"h6",sx:n.headerViewMoreText,children:[e.tags.length-3,"+ more"]})]})]})}),t.jsx(c,{item:!0,xs:3,children:t.jsxs(i,{flexDirection:"column",display:"flex",justifyContent:"space-between",height:"100%",alignItems:"flex-end",children:[t.jsx(T,{}),t.jsxs(i,{width:"100%",children:[e.companyId===-1?t.jsx(s,{variant:"text",sx:{fontSize:"14px",bgcolor:"gray"}}):t.jsx(a,{variant:"body1",sx:{color:"rgba(255, 255, 255, 0.60)",textAlign:"right"},children:"Delivering Company"}),t.jsx(i,{sx:n.orangeRightDivider}),e.companyId===-1||f?t.jsx(s,{variant:"text",sx:{fontSize:{xs:"16px",sm:"18px",md:"20px"},bgcolor:"gray"}}):t.jsx(i,{sx:n.logoContainer,children:t.jsx(i,{component:"img",src:m.length>0?m[0].logo_image:"",alt:"logo",height:"32px",sx:{objectFit:"cover"}})})]})]})})]})}),t.jsx(i,{sx:n.thumbnailContainer,children:e.thumbnail.length===0?t.jsx(s,{variant:"rectangular",sx:{height:"100%",width:"100%",bgcolor:"gray"}}):t.jsx(i,{height:"100%",width:"100%",component:"img",src:e.thumbnail[0].file instanceof File?URL.createObjectURL(e.thumbnail[0].file):e.thumbnail[0].file,sx:{objectFit:"cover"}})})]})}),t.jsxs(i,{minHeight:"500px",bgcolor:"white",sx:{px:"10%",pt:"6.25rem"},children:[t.jsx(i,{px:"6%",children:t.jsxs(c,{container:!0,spacing:2,children:[t.jsx(c,{item:!0,xs:6,children:t.jsx(i,{children:t.jsxs(i,{sx:n.summaryContainer,children:[t.jsx(a,{variant:"h4",children:"Summary"}),t.jsx(i,{sx:n.summaryDivider}),e.summary.length===0?t.jsx(t.Fragment,{children:[1,2,3,4,5,6,7,8,9].map(()=>t.jsx(s,{variant:"rectangular",height:"18px",sx:{borderRadius:"2px"}}))}):t.jsx(t.Fragment,{children:t.jsx(F,{layoutDataString:e.summary})})]})})}),t.jsx(c,{item:!0,xs:6,children:t.jsx(i,{sx:n.pdfContainer,children:t.jsxs(i,{sx:{p:"24px",position:"relative"},children:[t.jsx(i,{component:"img",src:I,sx:n.pdfContainerBg}),t.jsx(i,{sx:n.pdfTitleContainer,children:t.jsxs(i,{children:[t.jsx(i,{children:e.pdf.length===0||e.whitepaperTitle.length===0?t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"text",sx:{fontSize:{xs:"22px",sm:"26px",md:"32px"}}}),t.jsx(s,{variant:"text",sx:{width:"60%",fontSize:{xs:"22px",sm:"26px",md:"32px"}}})]}):t.jsx(a,{variant:"h3",sx:n.pdfWhitepaperTitle,children:e.whitepaperTitle})}),t.jsx(i,{mt:"1.5rem",children:e.pdf.length===0||e.tags.length===0?t.jsxs(t.Fragment,{children:[t.jsx(s,{variant:"text",sx:{width:"60%",fontSize:"14px"}}),t.jsx(s,{variant:"text",sx:{width:"60%",fontSize:"14px"}})]}):t.jsxs(i,{display:"flex",flexWrap:"wrap",rowGap:"0.7rem",children:[e.tags.slice(0,3).map((o,l)=>{var x;return t.jsxs(i,{display:"flex",justifyContent:"center",alignItems:"center",children:[t.jsx(a,{variant:"body2",sx:{color:r.black1,fontWeight:300,textTransform:"capitalize"},children:(x=d.find(h=>h.id===o))==null?void 0:x.name}),l!==2&&t.jsx(i,{mx:2,height:"4px",width:"4px",borderRadius:"69px",bgcolor:r.gray15})]})}),e.tags.length-3>0&&t.jsxs(a,{variant:"body2",sx:n.pdfViewMoreText,children:[e.tags.length-3,"+ More"]})]})})]})}),e.pdf.length===0?t.jsxs(t.Fragment,{children:[" ",t.jsx(s,{variant:"text",sx:{width:"80%",fontSize:"32px",my:"2.6rem"}})]}):t.jsx(a,{variant:"h3",sx:{color:r.black1,fontWeight:400,my:"2.6rem"},children:"Want to know more details?"}),e.pdf.length===0?t.jsx(t.Fragment,{children:t.jsx(s,{variant:"rectangular",height:"54px"})}):t.jsx(z,{title:"VIEW WHITE PAPER",onClick:()=>{const o=e==null?void 0:e.pdf[0].file;k(o,e==null?void 0:e.pdf[0].name)},sx:n.viewWhitePaperBtn})]})})})]})}),t.jsx(i,{sx:n.footerContainer,children:t.jsx(i,{display:"flex",flexWrap:"wrap",gap:2,children:e.tags.length>0&&e.tags.map(o=>{var l;return t.jsx(t.Fragment,{children:t.jsx(W,{label:(l=d.find(x=>x.id===o))==null?void 0:l.name,sx:n.footerChip})})})})})]})]})};export{v as W};
