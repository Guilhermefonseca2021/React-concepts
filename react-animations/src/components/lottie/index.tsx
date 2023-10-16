import Lottie from "lottie-react";
import groovyWalkAnimation from "./animation_lntfmglg.json";

export function AnimationLottie() {
    // const defaultOptins = {
    //     loop: true,
    //     autoplay: true,
    //     // animationData: animatedCat
    // };

    return <Lottie animationData={groovyWalkAnimation} height={200} width={200} />;
}
  