// eslint-disable-next-line
import { useState } from "react";

const T = {
  cream:"#faf8f4", sand:"#f0ebe3", sandDk:"#d4c4b0", bark:"#3d2b1f",
  barkLt:"#6b4c38", sage:"#6b8f71", terra:"#c1714f",
  border:"rgba(61,43,31,0.1)", mist:"rgba(61,43,31,0.45)",
  serif:"'Georgia',serif", sans:"'Arial',sans-serif",
};

export default function App() {
  const [screen, setScreen] = useState("landing");
  return (
    <div style={{minHeight:"100vh",background:T.cream,fontFamily:T.sans}}>
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 40px",borderBottom:"1px solid "+T.border}}>
        <div style={{fontFamily:T.serif,fontSize:26,fontWeight:700,color:T.bark}}>🌿 VitaReel</div>
        <div style={{display:"flex",gap:12}}>
          <button onClick={()=>setScreen("app")} style={{padding:"13px 28px",background:"transparent",border:"1.5px solid "+T.sandDk,borderRadius:30,color:T.bark,fontSize:14,fontWeight:600,cursor:"pointer"}}>Log In</button>
          <button onClick={()=>setScreen("app")} style={{padding:"13px 28px",background:T.bark,border:"none",borderRadius:30,color:T.cream,fontSize:14,fontWeight:600,cursor:"pointer"}}>Start Free</button>
        </div>
      </nav>
      <div style={{textAlign:"center",padding:"80px 40px",maxWidth:760,margin:"0 auto"}}>
        <h1 style={{fontFamily:T.serif,fontSize:60,fontWeight:700,color:T.bark,lineHeight:1.1,marginBottom:20}}>Create stunning<br/><em style={{color:T.terra}}>wellness reels</em><br/>in seconds</h1>
        <p style={{fontSize:18,color:T.barkLt,lineHeight:1.7,marginBottom:40}}>Generate scroll-stopping scripts for lifestyle, travel, beauty and wellness.</p>
        <button onClick={()=>setScreen("app")} style={{padding:"16px 36px",background:T.bark,border:"none",borderRadius:30,color:T.cream,fontSize:16,fontWeight:700,cursor:"pointer"}}>✿ Start Creating Free</button>
      </div>
    </div>
  );
}
