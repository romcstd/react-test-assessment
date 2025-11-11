export interface PricingPlan {
  id: number;
  price: number;
  period: string;
  name: string;
  data: string;
  dataBonus: boolean;
  dataTotal?: string;
  dataType: string;
  isDataGb: boolean;
  min: string;
  minBonus: boolean;
  minTotal?: string;
  minType: string;
  features: string[];
  offerBadge: boolean;
  mostPopular: boolean;
}
