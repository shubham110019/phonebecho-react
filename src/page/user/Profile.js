import React from 'react'
import Footer from '../../comonent/Footer'
import Navbar from '../../comonent/Navbar'
import Bookdata from '../../comonent/Bookdata'

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className='container py-5'>

        <div className='row'>
          <div className='col-md-3'>
            <div className='border p-3'>


              <div class="text-center">
                <img src="https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png" class="h-20" style={{"height":"100px","borderRadius":"50%"}} />
              </div>

              <div className='user-data mt-4'>
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Name :</td>
                      <td>{localStorage.getItem('username')}</td>
                    </tr>
                    <tr>
                      <td>Phone :</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>E-mail :</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Address : </td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='col-md-8'>
            <div className='border p-3'>
              content box
            </div>
          </div>
        </div>


      </div>
      <Bookdata/>
      <Footer />
    </>
  )
}

export default Profile
