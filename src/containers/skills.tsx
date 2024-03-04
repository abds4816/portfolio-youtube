import SectionTitle from "@/components/section-title";
import SkillsContainer from "@/components/skills/skills-container";
import { Effect } from "@/components/ui/effects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItems } from "@/constants/tab-items";
import { getSkills } from "@/lib/skills";
import React from "react";

const SkillsSection = async () => {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const tools = await getSkills("tools");

  return (
    <section id="skills" className="relative space-y-6">
      <Effect className="-right-20 bottom-8 md:-right-36 md:bottom-2" />
      <SectionTitle title="skills" description="my technical proficiency" />
      <Tabs defaultValue={tabItems[0].value}>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {/* tabs list */}
          <TabsList className="grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit">
            {tabItems.map((item) => {
              const { value, label, icon: Icon } = item;
              return (
                <TabsTrigger key={value} value={value} className="w-full gap-2">
                  <Icon className="size-4" />
                  <span className="capitalize">{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="md:col-span-2 bg-background/50">
            <TabsContent value="frontend">
              <SkillsContainer data={frontendSkills} label="front end" />
            </TabsContent>
            <TabsContent value="backend">
              <SkillsContainer data={backendSkills} label="back end" />
            </TabsContent>
            <TabsContent value="tools">
              <SkillsContainer data={tools} label="tools" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;
