//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebLOU
{
    using System;
    using System.Collections.Generic;
    
    public partial class Event
    {
        public int Id { get; set; }
        public string Venue { get; set; }
        public string Event_Name { get; set; }
        public string Description { get; set; }
        public System.DateTime Start_Date { get; set; }
        public Nullable<System.TimeSpan> Start_Time { get; set; }
        public Nullable<System.DateTime> End_Date { get; set; }
        public Nullable<System.TimeSpan> End_Time { get; set; }
        public string Link { get; set; }
        public string City { get; set; }
        public string Image { get; set; }
        public string Privacy { get; set; }
        public string Background { get; set; }
    }
}
