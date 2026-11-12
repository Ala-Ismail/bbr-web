import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/components/header';
import './globals.css';
export const metadata: Metadata = { title: { default: 'BBR — A continuous record of flight', template: '%s | BBR Aviation' }, description: 'An FPGA-based foundation for continuous aviation flight-data recording. Explore the proposed BBR architecture and development programme.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><a href="#main" className="skip">Skip to content</a><Header/>{children}<footer><div className="container footer-top"><Link href="/" className="brand">BBR<span>AVIATION SYSTEMS</span></Link><p>A continuous record.<br/>A clearer understanding.</p><Link href="/development">Follow the development <ArrowUpRight size={16}/></Link></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} BBR Aviation</span><span>Proposed architecture · Development in progress</span><Link href="/technology">Technology</Link></div></footer></body></html> }
