import FeatureCard from "./FeatureCard"

function FeaturedList() {
    return (
        <section className="py-20 pl-16">
            <h1 className="font-bold text-3xl mb-10 leading-snug">HandCrafted Candles Collections <br /> just for you...</h1>
            <ul className="flex gap-5 overflow-x-scroll">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </ul>
        </section>
    )
}

export default FeaturedList