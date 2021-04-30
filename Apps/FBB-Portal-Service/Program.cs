using Confluent.Kafka;
using System;

namespace FBB_Portal_Service
{
    class Program
    {
        static void Main(string[] args)
        {
            var config = new ConsumerConfig
            {
                GroupId = "gid-01",
                BootstrapServers = "dev.tarathep.com:9092",
                EnableAutoCommit = true
            };

            string topic = "HOME_CHECKIN_CREATED";

            using (var consumer = new ConsumerBuilder<Null, string>(config).Build())
            {
                consumer.Subscribe(topic);
                while (true)
                {
                    var cr = consumer.Consume();
                    Console.WriteLine(cr.Message.Value);
                }
            }
        }
    }
}
