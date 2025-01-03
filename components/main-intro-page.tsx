import { title, subtitle } from "@/components/primitives";

export const MainIntroPage = () => {
    return (
        <section id="intro">
            <span className={title()}>Metro&nbsp;</span>
            <span className={title({ color: "violet" })}>Visual Perkasa&nbsp;</span>
            <br />
            <span className={title()}>
            Revolutionizing Business Efficiency with Metro Visual Perkasa
            </span>
            <div className={subtitle({ class: "mt-4" })}>
            BEmpower Your Enterprise with Scalable ERP Solutions
            </div>
        </section>
    );
};