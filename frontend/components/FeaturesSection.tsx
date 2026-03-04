"use client";

import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/static_data/featureSection";

export default function FeaturesSection() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built to Help You Actually Change
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vivida combines psychology and habit science to help you shift the patterns that quietly shape your thoughts and behaviours
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="
                  group
                  rounded-2xl
                  border border-gray-100
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <CardContent className="p-8 flex flex-col gap-6">
                  
                  <div className="
                    w-12 h-12 rounded-xl
                    bg-[#6366F1]/10
                    flex items-center justify-center
                    text-[#6366F1]
                    group-hover:scale-110
                    transition
                  ">
                    <Icon size={24} />
                  </div>

                  
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
