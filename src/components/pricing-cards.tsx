import type React from 'react';
import type { PricingPlan } from '../types/pricing-plan';
import { DiagonalText } from './diagonal-text';
import { Check } from 'lucide-react';

interface PricingCardsProps {
  plan: PricingPlan;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ plan }) => {
  return (
    <>
      <div className="card-border relative flex flex-col justify-between bg-white py-4 pr-4 pl-8">
        {plan.mostPopular && (
          <div className="background-tag absolute -top-7 left-2 z-50 rounded-t-lg px-4 py-1 text-sm font-medium text-white">
            <span>Most popular</span>
          </div>
        )}
        <div>
          <p className="text-primary text-sm">You Pay</p>
          <h3 className="text-primary text-lg font-bold">
            AED {plan.price}{' '}
            <span className="text-base font-normal">/month</span>
          </h3>
          <p className="text-xs">{plan.period}</p>

          <hr className="card-seperator my-2 border-t" />

          <p className="text-secondary text-sm">You Get</p>
          <h3 className="text-secondary text-lg font-bold">{plan.name}</h3>

          <hr className="card-seperator my-2 border-t" />

          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold">
              {plan.dataBonus ? (
                <DiagonalText text={plan.data} />
              ) : (
                <span>{plan.data} GB</span>
              )}
              {plan.dataBonus && (
                <span>
                  {plan.dataTotal} {plan.isDataGb && <>GB</>}
                </span>
              )}
            </p>

            <p className="text-xs">
              <span>{plan.dataType}</span>
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <p className="max-w-48 text-lg font-bold">
              {plan.minBonus ? (
                <DiagonalText text={plan.min} />
              ) : (
                <span>{plan.min}</span>
              )}
              {plan.minBonus && <span>{plan.minTotal}</span>}
            </p>
            <p className="text-xs">
              <span>{plan.minType}</span>
            </p>
          </div>

          <hr className="card-seperator mt-2 mb-3 border-t" />

          <ul className="my-2 block space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex place-items-center text-xs">
                <Check className="mr-1 h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          {plan.offerBadge && (
            <>
              <hr className="card-seperator my-3 border-t" />

              <div className="relative">
                <span className="background-primary mb-2 inline-block rounded-full px-2 text-xs text-white">
                  Limited time offer
                </span>
                <p className="text-xs">
                  <strong>The Entertainer</strong> on us for 12 months
                </p>
              </div>
            </>
          )}

          <hr className="card-seperator my-4 border-t" />

          <div className="flex flex-row justify-between gap-4">
            <button
              type="button"
              className="t cursor-pointer text-sm font-medium underline decoration-1"
            >
              What you get
            </button>
            <button
              type="button"
              className="border-color text-primary h-11 flex-1 cursor-pointer rounded-md border px-5 font-medium"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
