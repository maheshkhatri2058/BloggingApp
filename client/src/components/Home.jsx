import 'animate.css';
import React, { useState } from "react";
const Home = () => {
  const [title,settitle]=useState();
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    settitle(imageUrl);

  };

  return (
    <>
    <div className="container h-min bg-white">
    <h2 className='animate__animated  animate__zoomIn p-10'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt velit atque aut asperiores id harum. Assumenda, maiores! Blanditiis laudantium quo molestias molestiae consequuntur quibusdam labore adipisci nobis aliquid nam quasi, ipsum reprehenderit accusamus dolore, ipsa tenetur doloremque aut placeat consequatur! Delectus itaque laudantium suscipit necessitatibus, adipisci, voluptas atque ducimus eum deserunt maxime possimus accusamus dignissimos dolores, harum cum cumque expedita ullam. Cum reiciendis dolorum, velit, repudiandae eaque aspernatur deleniti maxime sequi accusamus corrupti cumque nesciunt. Tempore cupiditate temporibus porro ullam neque sint hic similique voluptatibus aperiam totam numquam vitae veniam sit sed velit necessitatibus, quo quas quibusdam illo. Incidunt error tenetur voluptas saepe numquam temporibus expedita deserunt. Optio fugit accusamus hic sed id repellat temporibus excepturi, et consectetur impedit, officiis dolores rem aperiam animi minus maxime recusandae reiciendis nisi? Tempore illo nisi exercitationem doloremque totam velit porro earum cumque culpa rem aspernatur iure, dolor numquam animi blanditiis accusamus consequatur temporibus, voluptatem hic natus ut cupiditate repellendus amet. Quisquam fugit dicta reprehenderit? Recusandae commodi eos rem quisquam deserunt, nihil ratione repudiandae aperiam magni, quis dolorem libero quod voluptatem voluptatibus ut fuga obcaecati autem reiciendis ab earum id nesciunt placeat corrupti. Ipsum id temporibus, tempora iste aliquam placeat necessitatibus pariatur, commodi corrupti rerum explicabo ea beatae cupiditate mollitia alias earum ad, minima ut odit. Quos tenetur quibusdam corrupti amet ratione earum blanditiis quae sequi aspernatur fugiat dicta rem nostrum, reiciendis laboriosam odio laborum nemo inventore nobis officiis, aliquam necessitatibus commodi, repellat alias. Rerum consequuntur quos assumenda dicta laudantium necessitatibus tempora velit, odio reiciendis eaque accusantium ullam ut quia magni sapiente eligendi distinctio architecto libero quisquam repellat provident sit eum. Sequi magnam qui, temporibus consequuntur nulla debitis reprehenderit natus quis aut pariatur quidem quos beatae asperiores facere autem facilis doloremque doloribus sapiente. Repudiandae explicabo numquam fugit! Fuga consequuntur magnam obcaecati itaque impedit, unde sed, odit reprehenderit commodi sunt deleniti quam voluptatum alias nobis laudantium magni in? Odit quos autem cum molestias eius rerum adipisci, iusto fugit vel porro ratione non enim minima aliquam nihil aperiam commodi inventore? Accusantium tempora vitae perspiciatis aut fuga iste saepe, sit aperiam vel neque dolor possimus doloribus voluptatibus a nesciunt asperiores expedita! Dolores aliquid obcaecati earum labore, voluptates natus blanditiis vel ipsa repudiandae iure deserunt molestiae facere delectus quasi, doloremque culpa, consequatur tempora fugiat? Architecto ex qui dignissimos doloremque deleniti consequatur eos? Eligendi ipsam asperiores beatae labore? Ipsum laudantium at fugit dolor eaque accusantium soluta fugiat nostrum consequatur nesciunt ipsam, laborum hic amet nobis dolorem eum temporibus iusto, voluptates, eligendi quo cupiditate ratione sit quae unde! Officiis obcaecati facilis excepturi ipsum minus quod, ratione, totam omnis voluptatibus asperiores dignissimos placeat temporibus eveniet corrupti repellat numquam earum exercitationem illum quam, quasi distinctio culpa ea. Deleniti veritatis non saepe molestiae commodi minus. Fugit tempora consequuntur illo voluptatum eligendi accusamus suscipit saepe quasi pariatur. Tenetur libero, maiores sit porro quibusdam ut voluptates quos eligendi quaerat distinctio veniam voluptas accusamus, dolores laborum necessitatibus quas eaque quis ipsa eius et, facilis consequatur. Nesciunt cum quibusdam similique quam beatae sit quidem incidunt magnam!
    </h2>

    </div>
    </>
    
  );
};

export default Home;
