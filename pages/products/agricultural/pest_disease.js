import { useState } from "react";
import styled from "styled-components";

import { Section, FlexBox, Button, Paragraph } from "theme";

import SEO from "components/SEO";

import Header from "components/Header";
import Product from "components/Product";

import MidPageTrianglesRight from "assets/images/utils/MidPageTrianglesRight.jpg";
import PestDisease from "assets/images/products/PestNewHeader.jpeg";

import Fenpyroximate from "assets/images/products/Fenpyroximate.jpeg";
import Bromopropylate from "assets/images/products/Bromopropylate.jpeg";
import Propargite from "assets/images/products/Propargite.jpeg";
import Pyridaben from "assets/images/products/Pyridaben.jpeg";
import Tetradifon from "assets/images/products/Tetradifon.jpeg";

const ProductsContainer = styled(Section)`
  position: relative;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  padding-top: 50px !important;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TabContainer = styled(FlexBox)`
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const TabItem = styled(Button)`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primary};
  padding: 20px 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;

const Home = () => {
  const [currentTab, setCurrentTab] = useState("Acaricide");
  return (
    <>
      <SEO title="Pest & Disease Control" />
      <Header title="Pest & Disease Control" image={PestDisease} />
      <ProductsContainer>
        <Paragraph>
          The most beneficial advantage of using pesticides is their
          effectiveness against pests that could easily destroy crops in their
          entirety, devastating whole fields at a time. By controlling insect
          and rodent populations, pesticides help prevent the spreading of
          diseases. Insecticides protect buildings from termite infestations. By
          eliminating predators that would destroy crops and raise the cost of
          corn and cotton, pesticides keep the price of clothing and food down.
          Pesticides are even put to use in operating rooms to clean and
          disinfect surgical instruments and other equipment to keep the rooms
          and materials sterile and free of bacteria and microbial life forms.
        </Paragraph>
        <TabContainer justify="center" alignItems="center">
          <TabItem
            onClick={() => setCurrentTab("Acaricide")}
            isActive={currentTab === "Acaricide"}
          >
            Acaricide
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("Fungicides")}
            isActive={currentTab === "Fungicides"}
          >
            Fungicides
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("Herbicides")}
            isActive={currentTab === "Herbicides"}
          >
            Herbicides
          </TabItem>
          <TabItem
            onClick={() => setCurrentTab("Insecticides")}
            isActive={currentTab === "Insecticides"}
          >
            Insecticides
          </TabItem>
        </TabContainer>
        {/* <Heading>Pest & Disease Control</Heading> */}
        <Inner>
          {currentTab === "Acaricide" ? (
            <>
              <Paragraph>
                Acaricides are pesticides that kill members of the arachnid
                subclass Acari, which includes ticks and mites. Acaricides are
                used both in medicine and agriculture, although the desired
                selective toxicity differs between the two fields.
              </Paragraph>
              <Product
                img={Fenpyroximate}
                title="Fenpyroximate"
                text="Fenpyroximate (FP), is an acaricide that is widely used in the prevention of acarids (mites) in fruit plant gardens."
              />
              <Product
                img={Propargite}
                title="Propargite"
                text="Propargite is the cornerstone of any mite control program . Working by two different modes of action, the active ingredient, propargite, has been providing effective mite control for over 40 years with no confirmed cases of resistance."
              />
              <Product
                img={Pyridaben}
                title="Pyridaben"
                text="Pyridaben, a pyridazinone derivative, is a new acaricide and insecticide for control of mites and some insects such as white flies, aphids and thrips."
              />
              <Product
                img={Tetradifon}
                title="Tetradifon"
                text="Chemical substance used to control mites or ticks (especially species that damage ornamental or food plants)"
              />
              <Product
                img={Bromopropylate}
                title="Bromopropylate"
                text="Bromopropylate is a chemical compound used as an acaricide against spider mites in apiaries and on fruit crops such as citrus and grapes."
              />
            </>
          ) : currentTab === "Fungicides" ? (
            <>
              <Paragraph>
                Diseases are a major source of crop and plant damage that can be
                caused by a number of plant pathogenic (disease-causing)
                organisms. Fungi are the number one cause of crop loss
                worldwide. Viruses, nematodes, and bacteria also cause diseases
                in plants. Symptoms resembling those caused by pathogens can be
                caused by abiotic (non-living) factors, such as nutrient
                deficiency and air pollution, and also insects.
                <br />
                Fungicides, herbicides and insecticides are all pesticides used
                in plant protection. A fungicide is a specific type of pesticide
                that controls fungal disease by specifically inhibiting or
                killing the fungus causing the disease. Not all diseases caused
                by fungi can be adequately controlled by fungicides. These
                include the vascular diseases Fusarium and Verticillium wilt.
                Diseases caused by other types of organisms, disorders caused by
                abiotic factors, and insect damage are not controlled by
                fungicides. Thus it is essential to first determine the cause of
                symptoms before applying a fungicide.
              </Paragraph>
              <Product
                title="Azocyclotin"
                text="Azocyclotin is an organotin contact acaricide effective against phytophagous mites. For all mobile stages of Tetranychus, Panonychus spp. on citrus, fruits (including grapes), vegetables, hops, cotton, and ornamentals."
              />
              <Product
                title="Benomyl"
                text="Benomyl is a systemic foliar fungicide registered for control of a wide range of diseases of fruits, nuts, vegetables, and field crops. Benomyl is formulated as a wettable powder and wettable powder in water soluble film both of which contain 50 percent active ingredient."
              />
              <Product
                title="Captan"
                text="Captan is a fungicide used on fruits, vegetables, and ornamentals."
              />
              <Product
                title="Carbendazim"
                text="Carbendazim is a widely used, broad-spectrum benzimidazole fungicide and a metabolite of benomyl."
              />
              <Product
                title="Chlorothalonil"
                text="Chlorothalonil is a organic compound that mainly used as a broad spectrum, nonsystemic fungicide, with other uses as a wood protectant, pesticide, acaricide, and to control mold, mildew, bacteria, algae."
              />
              <Product
                title="Iprodione(35%)+ Carbendazim(17.5%)"
                text="A fungicide for the control of downy mildew, damping off, late blight, alternaria blight, phytopthora foot rot, early blight of potato, leaf spot, brown and black rust, Leaf rot, angular leaf spot of ginger on various crops like wheat, maize, potato, chilies, tomato, onion, cauliflower, ground nut, grapes, banana, apple, cumin etc."
              />
              <Product
                title="Penconazole"
                text="A fungicide used to control powdery mildew, scab and other pathogenic Ascomycetes, Basidiomycetes and Deuteromycetes"
              />
              <Product
                title="Propiconazole"
                text="Propiconazole is a triazole fungicide, also known as a DMI, or demethylation inhibiting fungicide due to its binding with and inhibiting the 14-alpha demethylase enzyme from demethylating a precursor to ergosterol."
              />
              <Product
                title="Thiophanate–Methyl"
                text="Thiophanate-methyl breaks down in plants and the environment to form carbendazim and the use of thiophanate-methyl can lead to residues of carbendazim in treated commodities."
              />
              <Product
                title="Tricyclazole"
                text="Control of rice blast (Pyricularia oryzae) in transplanted and direct-seeded rice, at 100 g/ha. Can be applied as a flat drench, transplant root soak, or foliar application. One or two applications by one or more of these methods give a season-long control of the disease."
              />
            </>
          ) : currentTab === "Herbicides" ? (
            <>
              <Paragraph>
                Just as pesticide is used to rid an area of unwanted pests,
                herbicide is used to get rid of unwanted plant life, like weeds,
                brush, unproductive bushes or trees, and other growth that takes
                nutrients away from crops and other useful plants. Many are
                synthetic and can be toxic to "good" plants, as well as to
                animals and humans. While there are organic varieties, it is
                important for people who are using these products to read the
                labels carefully to insure that people, pets, livestock and
                useful vegetation won't be harmed by their use.
                <br />
                Herbicides are available in two main types: non-selective and
                selective. The non-selective variety is used to kill all growth
                and is generally reserved for agricultural use or for clearing
                large or heavily overgrown areas. On the other hand, a selective
                herbicide is used to target certain types of plant life. This
                form works to curb growth, usually through some type of hormone
                disruption, and should not affect other vegetation.
                <br />
                For the home gardener, a non-selective herbicide is rarely
                required. An organic, selective product is the better choice for
                maintaining grass and home gardens. Farmers, orchard owners,
                developers and park services may use non-selective forms to
                treat large areas and prepare land for future use.
              </Paragraph>
              <Product title="2,4D(36%) + MCPA(31.5%)" />
              <Product
                title="Acetachlor"
                text="Grasses like foxtails, barnyardgrass and crabgrass, and small-seeded broadleaf weeds like waterhemp, lambsquarters and pigweed are controlled through a suspo-emulsion formulation which tank-mixes and cleans out easily"
              />
              <Product title="Bensulfuron-Methyl" />
              <Product title="Haloxyfop-R-methyl" />
              <Product title="Glyphosate" />
              <Product
                title="Nicosulfuron"
                text="controls a wide range of maize weeds, both annual weeds and perennial weeds.  Nicosulfuron is a systemic selective herbicide, displaying genera-selectivity, therefore ensuring it is effective at killing other plants growing near the maize – even those grasses closely related to maize."
              />
              <Product
                title="Oxadizone"
                text="Non-selective contact herbicide, absorbed by the foliage, with some translocation in the xylem."
              />
            </>
          ) : currentTab === "Insecticides" ? (
            <>
              <Paragraph>
                Insecticides are chemicals used to control insects by killing
                them or preventing them from engaging in behaviors deemed
                undesirable or destructive. They are classified based on their
                structure and mode of action. Many insecticides act upon the
                nervous system of the insect (e.g., Cholinesterase (ChE)
                inhibition) while others act as growth regulators or endotoxins.
                Insecticides are commonly used in agricultural, public health,
                and industrial applications, as well as household and commercial
                uses (e.g., control of roaches and termites).
                <br />
                Insecticides are applied in various formulations and delivery
                systems (e.g., sprays, baits, slow-release diffusion) that
                influence their transport and chemical transformation.
                Mobilization of insecticides can occur via runoff, either
                dissolved or sorbed to soil particles, atmospheric deposition
                (primarily spray drift), or sub-surface flow. Some insecticides
                are accumulated by aquatic organisms and transferred to their
                predators. Insecticides are designed to be lethal to insects.
              </Paragraph>
              <Product
                title="Abamectin"
                text="Abamectin is a mixture of avermectins containing more than 80% avermectin B1a and less than 20% avermectin B1b"
              />
              <Product
                title="Acetamiprid"
                text="Systemic insecticide with translaminar activity and with contact and stomach action. Agonist of the nicotinic acetylcholine receptor, affecting the synapses in the insect central nervous system."
              />
              <Product
                title="Acetamiprid"
                text="The metabolism of acetamiprid has been primarily studied in plants and soil. as well as in Honey Bees"
              />
              <Product
                title="Carbaryl"
                text="Carbaryl is a chemical in the carbamate family used chiefly as an insecticide"
              />
              <Product
                title="Chlorpyrifos 39.8% + Alpha Cypermethrin 1% EC"
                text="Combination insecticide of two active ingredients amongst broad spectrum insecticides"
              />
              <Product
                title="Dimethoate"
                text="Dimethoate is a widely used organophosphate insecticide used to kill insects on contact"
              />
              <Product
                title="Fenitrothion"
                text="fenitrothion has been used since 1959 to control insects on rice, cereals, fruits, vegetables, stored grains, cotton, in forests and for fly, mosquito, and cockroach control in public health programs."
              />
              <Product title="Glyphosate" text="" />
              <Product
                title="Imidacloprid"
                text="Imidacloprid is a systemic insecticide which acts as an insect neurotoxin and belongs to a class of chemicals called the neonicotinoids which act on the central nervous system of insects with much lower toxicity to mammal"
              />
              <Product
                title="Malathion"
                text="Malathion is an organophosphate parasympathomimetic which binds irreversibly to cholinesterase."
              />
              <Product
                title="Phosalone"
                text="Phosalone is an organophosphate chemical commonly used as an insecticide and acaricide"
              />
              <Product
                title="Thiodecarb"
                text="Thiodicarb acts as an ovicide against cotton bollworms and budworms. Thiodicarb is used primarily on cotton, sweet corn, and soybeans."
              />
              <Product
                title="Trichlorfon"
                text="Metrifonate is an irreversible organophosphate acetylcholinesterase inhibitor"
              />
            </>
          ) : null}
        </Inner>

        <img
          src={MidPageTrianglesRight.src}
          style={{
            position: "absolute",
            top: "-200px",
            right: 0,

            zIndex: -100,
          }}
        />
      </ProductsContainer>
    </>
  );
};

export default Home;
