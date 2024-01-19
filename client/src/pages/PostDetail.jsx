import React from 'react'
import PostAuthor from '../component/PostAuthor'
import { Link } from 'react-router-dom';
import Thumbnail22 from "../images/blog23.jpg";
function PostDetail() {
  return (
    <section className='post__detail'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={"/post/were/edit"} className='btn sm primary'>Edit</Link>
            <Link to={"/post/were/delete"} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is Title Post</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail22} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veritatis error aliquam placeat, ex aliquid natus quibusdam. Consectetur quidem assumenda repellat tempore. Nostrum soluta repellendus, distinctio doloremque fugiat magni sequi.
        Rerum, maxime amet impedit ipsum corrupti facilis beatae, animi aspernatur odit voluptates ut non qui similique minima quidem quaerat. Vel reiciendis ad nesciunt eligendi ducimus provident modi possimus suscipit. Repellat.</p>
       <p> Aut cum totam corporis voluptatibus, tempora, illo adipisci officiis repudiandae reprehenderit vero perferendis dolore? Impedit laborum consequuntur hic, veritatis voluptate placeat quisquam sed incidunt accusamus a eaque voluptates, consectetur obcaecati!
        Minima accusantium, aliquid minus laudantium placeat rerum rem quisquam illo vel, amet iusto deleniti quo consequuntur architecto in eos qui molestias, facilis sit veniam possimus. Vel eligendi magnam modi quod.
        Possimus iste, necessitatibus sunt similique laudantium magni nesciunt soluta omnis magnam in, cupiditate praesentium facilis eum voluptates aut tempore earum amet ratione dolorum quisquam! Fugiat porro inventore aliquam laborum possimus.
        Nisi vero labore saepe quo, optio tenetur iure, temporibus inventore facere ex, quasi animi quam ut nesciunt fuga aliquid. Earum nostrum error, quaerat pariatur minima voluptates enim nisi distinctio sequi?
        Qui vitae veniam fugit harum eligendi optio ullam atque accusamus doloremque amet? Amet ad laboriosam quaerat sunt quasi eligendi, asperiores praesentium omnis, voluptate cupiditate animi veniam nostrum debitis ipsa tempora.</p>
        <p>Non illum, nulla sint esse, reiciendis at rerum assumenda quae provident porro ducimus, laboriosam quibusdam obcaecati asperiores aut modi cum dolor quod autem sequi deleniti. Consectetur maiores velit explicabo provident.
        Qui nulla quasi aut architecto debitis. Ex aspernatur similique consequuntur suscipit quasi. Cum ullam similique neque voluptas, minus eaque illo atque non repellat repellendus consequuntur qui blanditiis, maxime autem quibusdam.
        Minima hic quibusdam doloribus at omnis saepe nisi corrupti quas delectus voluptate quo illum optio aliquam nulla aperiam, repudiandae repellendus, laborum earum deleniti laboriosam reiciendis consequatur sapiente? Excepturi, magni! Voluptatem?
        Quo ducimus minus sit et nisi ipsam dolorum qui distinctio odio aut, debitis tenetur error a atque laudantium, soluta mollitia ipsa nam sed nulla ex, est accusamus! Voluptate, aliquid officiis.
        Numquam, deleniti. Ut dolorum deleniti, rerum praesentium adipisci aut saepe rem, earum beatae deserunt voluptate quis reiciendis quidem ab. Consectetur ut voluptatibus tenetur eaque temporibus nobis cumque aperiam sapiente laudantium!
        Fuga necessitatibus illo corrupti molestias placeat assumenda harum sit tenetur ratione quisquam nemo laudantium optio libero consectetur, at quam velit ad. Eius, ratione quidem suscipit vitae porro ea asperiores alias!
        Autem reprehenderit corrupti asperiores maiores veniam. Ipsam suscipit perspiciatis incidunt totam praesentium dolor architecto placeat officia fugiat accusamus at quibusdam tempore, eaque neque vitae non consequuntur, commodi nulla sed ipsum.</p>
        <p>Nostrum a omnis inventore veritatis, sunt maiores hic fuga praesentium reprehenderit ipsum ab atque reiciendis ratione cum ut nam! Esse perferendis ullam quae illo sed vero quod officiis ut est?
        Cumque, deserunt? Dolorem provident fugiat quaerat laboriosam harum delectus nemo vel ut inventore minus eaque doloribus iusto veritatis eligendi totam voluptatem modi ipsam rem, nihil consectetur! Minima est nobis magnam!
        Ea voluptatibus porro dolore dignissimos dolor mollitia nam voluptate doloremque quas, cupiditate officiis a nihil dolorem recusandae molestiae incidunt quod id? Eos neque illum tempora! Dolores ratione modi impedit. Delectus.
        Commodi adipisci officia voluptate quod atque saepe quam sint nesciunt architecto laudantium, sed sunt harum aliquid dolore, sequi perspiciatis explicabo debitis facilis fuga ducimus? Quo hic aspernatur ex dolorem recusandae?
        Nobis tempore eos accusantium. Consequuntur aut fuga iure minus similique architecto mollitia molestias earum asperiores! Ipsum magnam omnis cupiditate voluptatem ducimus labore fugiat accusamus maiores voluptate, architecto, repellat dolorum ipsa.
        Eveniet quasi voluptas corporis modi. Impedit autem soluta tempora. Perspiciatis voluptas corporis ipsa dolorem id accusantium? Nesciunt, quia inventore, consectetur repudiandae officiis commodi culpa delectus est optio itaque velit cumque.</p>
      </div>
    </section>
  )
}

export default PostDetail