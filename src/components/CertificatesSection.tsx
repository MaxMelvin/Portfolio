import { useState } from 'react';
import { Award, ExternalLink, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const CertificatesSection = () => {
    const { certificates } = portfolioData;
    const [showAll, setShowAll] = useState(false);

    if (!certificates || certificates.length === 0) return null;

    const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);
    const isPdf = (path: string) => path.toLowerCase().endsWith('.pdf');

    return (
        <section id="certificates" className="py-24 relative">
            <div className="container-narrow relative z-10">
                <p className="section-heading text-center">Credentials</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Certifications & <span className="text-gradient">Awards</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {displayedCertificates.map((cert, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div
                                    className="card-glass p-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start group hover:border-primary/40 transition-all cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>

                                    <div className="flex-grow text-center sm:text-left">
                                        <div className='flex items-center justify-center sm:justify-start gap-2'>
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </h3>
                                            <Eye className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                                        <p className="text-xs text-muted-foreground/60 font-mono mb-2">{cert.date}</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-background/95 backdrop-blur-xl border-white/10">
                                <DialogHeader className="p-6 pb-2">
                                    <DialogTitle>{cert.title}</DialogTitle>
                                </DialogHeader>
                                <div className="p-6 pt-0 flex justify-center items-center bg-black/20 min-h-[300px]">
                                    {isPdf(cert.image) ? (
                                        <iframe
                                            src={cert.image}
                                            className="w-full h-[600px] rounded-md"
                                            title={cert.title}
                                        />
                                    ) : (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="max-h-[80vh] w-auto object-contain rounded-md shadow-2xl"
                                        />
                                    )}
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                {certificates.length > 3 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    Show More ({certificates.length - 3} remaining) <ChevronDown className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CertificatesSection;
