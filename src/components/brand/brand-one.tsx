import BrandSlider from "./brand-slider";

const BrandOne = () => {
  return (
    <div className="tp-brand-area px-10">
      <div className="w-full">
        <div className="tp-brand-brd-top tp-brand-ptb">
          <div className="grid grid-cols-6 w-full">
            <div className="col-span-1">
              <div className="tp-brand-title-box hidden lg:block">
                <h4 className="tp-brand-title tp_fade_bottom font-syne">
                  We Successfully
                  <br /> Worked With
                </h4>
              </div>
            </div>
            <div className="col-span-5">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="tp-brand-slider-wrapper">
                    <BrandSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
