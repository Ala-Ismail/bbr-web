'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export default function Header(){ const [open,setOpen]=useState(false);const path=usePathname();return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="BBR Aviation home" onClick={()=>setOpen(false)}>BBR<span>AVIATION SYSTEMS</span></Link><button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="navigation" className={open?'open':''} aria-label="Main navigation">{[['/','Overview'],['/technology','Technology'],['/readback','Readback'],['/development','Development']].map(([href,title])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{title}</Link>)}<Link className="header-cta" href="/technology#architecture" onClick={()=>setOpen(false)}>Explore BBR <ArrowUpRight size={15}/></Link></nav></div></header>}
