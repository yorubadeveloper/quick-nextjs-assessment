import Image from "next/image";

export type CardType = {
    companyId: number;
    companyName: string;
    companyImage: string;
};

const Card = ({companyName, companyImage}: CardType) => {
    return (
        <div className="company-card">
            <div className="company-logo-wrapper">
                <Image
                    src={companyImage}
                    alt={`${companyName} logo`}
                    fill
                    className="company-logo"
                />
            </div>
            <h3 className="company-name">{companyName}</h3>
        </div>
    );
};

export default Card;
